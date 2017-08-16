import FilesTableBody from './filesTableBody';

class FilesTable {
  constructor(parent, options) {
    this.parent = parent;
    this.options = options;
    this._setup();
  }

  _setup() {
    var $tableBody = this.parent.find("#files-table-body");
    var tableBodyEl = new FilesTableBody($tableBody,
      {
        model: this.options.model
      }
    );
  }
}

export default FilesTable
