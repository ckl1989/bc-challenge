class FilesToolbar {
  constructor(parent, options) {
    this.parent = parent;
    this.options = options;
    this._setup();
  }

  _setup() {
    var $newFolderButton = this.parent.find("#newFolderButton");

    $newFolderButton.click(() => {
      var newFolder = {
        name: "newerFolder",
        size: ""
      };
      this.options.onNewFolder(newFolder);
      console.log("new folder button clicked");
    });
  }
}

export default FilesToolbar
