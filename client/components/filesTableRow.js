class FilesTableRow {
  constructor(fileEntry, isNew, options) {
    this.fileEntry = fileEntry;
    this.isNew = isNew;
    this.options = options;
  }

  _setup() {
  }

  render() {
    var $tableRow = $("<tr>/</tr>");

    var $nameTD = $("<td>" + this.fileEntry.name + "</td>");

    if(this.isNew){
      $nameTD = $('<input type="text" value="NewFolder">');
      $nameTD.blur(() => {
        var newFolderName = $nameTD.value;
        this.options.createFolder(
          name: newFolderName
        )
      })
    }

    var $sizeTD = $("<td>" + this.fileEntry.size + "</td>");
    var $lastModified = $("<td>" + this.fileEntry.dateModified + "</td>");

    $tableRow.append($nameTD);
    $tableRow.append($sizeTD);
    $tableRow.append($lastModified);

    return $tableRow;
  }
}

export default FilesTableRow
