class FilesTable extends Component {
  constructor(parent, options) {
    super(parent, options);
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
