import axios from 'axios'
import File from './models/file'
import Folder from './models/folder'

class FilesController {
  constructor(){
    this.store = {};
  }

  getRootItems(){
    return axios.get('/api/files')
      .then(res => res.data)
      .then(files => {
        files.forEach((file) => {
          if(file.type === "FILE"){
            this.store[file._id] = new File(file);
          }else {
            this.store[file._id] = new Folder(file);
          }
        });
        return Object.values(this.store);
      });
  }

  createFolder(folder){
    console.log("in controller createFolder");
    return axios.post('/api/folders', folder)
      .then(res => res.data)
      .then(folder => {
        console.log(folder);

        var newFolder = new Folder(folder);

        this.store[folder._id]  = newFolder;

        return newFolder;
      });
  }
}

export default FilesController
