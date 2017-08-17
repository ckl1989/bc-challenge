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
    // var tableRowComponent = new FilesTableRow(fileEntry);
    // var $tableRow = tableRowComponent.render();
    //
    // if(fileEntry.type === "FOLDER"){
    //   this.parentsRowModel[fileEntry.id] = $tableRow;
    // }
    //
    // $parentRowEl.append($tableRow);


    var $tableRow = $("<tr>/</tr>");

    if(fileEntry.type === "FOLDER"){
      this.parentsRowModel[fileEntry.id] = $tableRow;
    }

    var $nameTD = $("<td>" + fileEntry.name + "</td>");
    var $sizeTD = $("<td>" + fileEntry.size + "</td>");
    var $lastModified = $("<td>" + fileEntry.dateModified + "</td>");

    $tableRow.append($nameTD);
    $tableRow.append($sizeTD);
    $tableRow.append($lastModified);

    $parentRowEl.append($tableRow);
  }
}

export default FilesTableBody
