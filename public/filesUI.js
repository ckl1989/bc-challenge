class FilesUI {
  constructor(){
    var $contentEl = $('#files-page-content');

    var $toolbarEl = $('#upload-toolbar');

    var $tableEl = $("#files-table")

    var tableComponent = new FilesTable($tableEl);
  }

}
