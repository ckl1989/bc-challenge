import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createFolder(){
      console.log("in controller createFolder");

      let folder = this.get('store').createRecord('folder', {
        name: "newFolder",
        lastModified: new Date()
      });
      folder.save();
    }
  }
});
