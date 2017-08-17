import FilesTableRow from './filesTableRow';

class FilesTableBody {
  constructor(parent, parentsRowModel, options) {
    this.parent = parent;
    this.parentsRowModel = parentsRowModel;
    this.options = options;
    this._setup();
  }

  _setup() {

  }

  generateRows(model){
    model.forEach((fileEntry) => {
      this.appendRow(fileEntry, this.parent);
    });
    console.log(this.parentsRowModel);
  }

  setData(files){
    this.parent.empty();
    //TODO: do we need to reset parentsRowModel?
    // console.log(files);
    this.generateRows(files);
  }

  insertData(fileEntry, parentId){
    var $parentRowEl = this.parentsRowModel[parentId];
    if(!$parentRowEl){
      $parentRowEl = this.parent;
    }
    this.appendRow(fileEntry, $parentRowEl);
    console.log(this.parentsRowModel);
  }

  appendRow(fileEntry, $parentRowEl){
    //add the fileEntry to the internal parent model if it is a folder
    var $tableRow = $("<tr>/</tr>");

    if(fileEntry.type === "FOLDER"){
      this.parentsRowModel[fileEntry.id] = $tableRow;
    }

    var $nameTD = $("<td>" + fileEntry.name + "</td>");
    var $sizeTD = $("<td>" + fileEntry.size + "</td>");
    var $lastModified = $("<td>" + fileEntry.dateModified + "</td>");

    var $actionsTD = this.createActionsTD(fileEntry, this.options.onCreateFolder);

    $tableRow.append($nameTD);
    $tableRow.append($sizeTD);
    $tableRow.append($lastModified);
    $tableRow.append($actionsTD);

    $parentRowEl.append($tableRow);
  }

  createActionsTD(fileEntry, onNewFolderCB){
    this.onNewFolderCB = onNewFolderCB;
    var $actionsTD = $("<td> </td>");
    var $newFolderButton = $('<button type="button" name="button">New Folder</button>');
    var $dialog = $( "#dialog-message" );
    var $folderNameInput = $dialog.find("#folderNameInput");
    $( "#dialog-message" ).dialog({
       autoOpen: false,
       modal: true,
       buttons: {
          Create: () => {
            this.onNewFolderCB({
              name: $folderNameInput.val(),
              parentId: fileEntry.parent
            });
          },
          Cancel: function() {$(this).dialog("close");}
       },
    });


    $newFolderButton.click(() => {
      $("#dialog-message").dialog( "open" );
      console.log("new folder on " + fileEntry.parent);
    });

    $actionsTD.append($newFolderButton)
    return $actionsTD;
  }
}

export default FilesTableBody
