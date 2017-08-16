import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  dateModified: DS.attr('string'),
  size: DS.attr('string'),
  type: "FOLDER"
});
