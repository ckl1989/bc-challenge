import axios from 'axios'

import FilesTable from './components/filesTable';
import FilesToolbar from './components/filesToolbar'
import FilesController from './filesController'

class FilesUI {
  constructor(){

    var filesController = new FilesController();

    var $contentEl = $('#files-page-content');

    var $toolbarEl = $('#files-toolbar');

    var $tableEl = $("#files-table");

    var toolbarComponent = new FilesToolbar($toolbarEl, {
      onNewFolder: filesController.createFolder
    });

    var tableComponent = new FilesTable($tableEl);

    filesController.getRootItems().then((items) => {
      tableComponent.setData(items);
    });
  }
}

export default FilesUI
