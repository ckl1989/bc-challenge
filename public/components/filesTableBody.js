class FilesTableBody extends Component {
  constructor(parent, options) {
    super(parent, options);
  }

  _setup() {
    var model = this.options.model;
    this.generateRows(model);
  },

  generateRows(model){
    model.forEach((fileEntry) => {
      var $tableRow = $("<tr>/</tr>");
      var $nameTD = $("<td>" + model.name + "</td>");
      $tableRow.append($nameTD);
      this.parent.append($tableRow);
    };
  }
}
