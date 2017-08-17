class FilesToolbar {
  constructor(parent, options) {
    this.parent = parent;
    this.options = options;
    this._setup();
  }

  _setup() {
    var $newFolderButton = this.parent.find("#newFolderButton");
    var $dialog = $( "#dialog-message" );
    var $folderNameInput = $dialog.find("#folderNameInput");

    $( "#dialog-message" ).dialog({
       autoOpen: false,
       modal: true,
       buttons: {
          Create: () => {
            this.options.onNewFolder({name: $folderNameInput.val()});
          },
          Cancel: function() {$(this).dialog("close");}
       },
    });

    $newFolderButton.click(function() {
       $("#dialog-message").dialog( "open" );
    });

  }
}

export default FilesToolbar
