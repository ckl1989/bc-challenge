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
  }

  appendRow(fileEntry, $parentRowEl){
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
