import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('band');
  },

  afterModel: function(band) {
    var description = band.get('description');

    if(Ember.isEmpty(description)) {
      this.transitionTo('band.songs');
    } else {
      this.transitionTo('band.details');
    }
  }
});
