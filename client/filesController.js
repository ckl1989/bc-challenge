import axios from 'axios'

class FilesController {
  constructor(){

  }

  getRootItems(){
    return axios.get('/api/files')
      .then(res => res.data)
      .then(files => {
        console.log(files);
        return files;
      });
  }

  createFolder(folder){
    console.log("in controller createFolder");
    return axios.post('/api/folders', folder)
      .then(res => res.data)
      .then(folder => {
        console.log(folder);
        return folder;
      });
  }

}

export default FilesController
