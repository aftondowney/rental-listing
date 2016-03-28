import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('announcement');
  },

  actions: {
    save3(params) {
      var newPost = this.store.createRecord('announcement', params);
      newPost.save();
      this.transitionTo('index');
    },

    destroyPost(announcement) {
      announcement.destroyRecord();
      this.transitionTo('index');
    }
  }
});
