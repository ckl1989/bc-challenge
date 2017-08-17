import FilesTableBody from './filesTableBody';

class FilesTable {
  constructor(parent, options) {
    this.parent = parent;
    this.options = options;
    this._setup();
    this.parentsRowModel = {};
  }

  _setup() {
    var $tableBody = this.parent.find("#files-table-body");
    this.tableBodyEl = new FilesTableBody($tableBody, {}, {
      onCreateFolder: this.options.onCreateFolder
    });
  }

  setData(files){
    this.tableBodyEl.setData(files);
  }

  insertData(item, parentId) {
    this.tableBodyEl.insertData(item, parentId);
  }
}

export default FilesTable
