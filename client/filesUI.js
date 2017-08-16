import axios from 'axios'

import FilesTable from './components/filesTable';
import FilesToolbar from './components/filesToolbar';
import FilesController from './filesController';

class FilesUI {
  constructor(){
    this.filesController = new FilesController();

    var $contentEl = $('#files-page-content');

    var $toolbarEl = $('#files-toolbar');

    var $tableEl = $("#files-table");

    var toolbarComponent = new FilesToolbar($toolbarEl, {
      onNewFolder: this.createFolder.bind(this)
    });

    this.tableComponent = new FilesTable($tableEl);

    this.filesController.getRootItems().then((items) => {
      this.tableComponent.setData(items);
    });
  }

  createFolder(folder) {
    this.filesController.createFolder(folder).then((folder) =>{
      this.tableComponent.insertData(folder, folder.parent);
    });
  }
}

export default FilesUI
