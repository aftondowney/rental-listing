import DS from 'ember-data';

export default DS.Model.extend({
  message: DS.attr();
  date: DS.attr();
  subject: DS.attr();
});
