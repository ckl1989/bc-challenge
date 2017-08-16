import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onCreateFolder(){
      console.log("in component onCreateFolder");
      this.get('createFolder')();
    }
  }
});
