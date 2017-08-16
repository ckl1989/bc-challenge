import axios from 'axios'

import FilesTable from './components/filesTable'

class FilesUI {
  constructor(){
    var $contentEl = $('#files-page-content');

    var $toolbarEl = $('#upload-toolbar');

    var $tableEl = $("#files-table")

    axios.get('/api/files')
    	.then(res => res.data)
    	.then(files => {
        var tableComponent = new FilesTable($tableEl, {model:files});
    		console.log(files)
    })
  }
}

export default FilesUI
