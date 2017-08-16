class FilesTableBody {
  constructor(parent, options) {
    this.parent = parent;
    this.options = options;
    this._setup();
  }

  _setup() {
    
  }

  generateRows(model){
    model.forEach((fileEntry) => {
      var $tableRow = $("<tr>/</tr>");
      var $nameTD = $("<td>" + fileEntry.name + "</td>");
      var $sizeTD = $("<td>" + fileEntry.size + "</td>");
      var $lastModified = $("<td>" + fileEntry.dateModified + "</td>");

      $tableRow.append($nameTD);
      $tableRow.append($sizeTD);
      $tableRow.append($lastModified);

      this.parent.append($tableRow);
    });
  }

  setData(files){
    this.parent.empty();
    this.generateRows(files);
  }
}

export default FilesTableBody
