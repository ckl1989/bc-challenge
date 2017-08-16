import FilesTableBody from './filesTableBody';

class FilesTable {
  constructor(parent, options) {
    this.parent = parent;
    this.options = options;
    this._setup();
  }

  _setup() {
    var $tableBody = this.parent.find("#files-table-body");
    this.tableBodyEl = new FilesTableBody($tableBody);
  }

  setData(files){
    this.tableBodyEl.setData(files);
  }
}

export default FilesTable
