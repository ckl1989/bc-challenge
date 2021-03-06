import axios from 'axios'

class FilesUI {
  constructor(){
    var $contentEl = $('#files-page-content');

    var $toolbarEl = $('#upload-toolbar');

    var $tableEl = $("#files-table")

    axios.get('/api/files')
    	.then(res => res.data)
    	.then(files => {
        var tableComponent = new FilesTable($tableEl, files);
    		console.log(files)
    })


  }

}
