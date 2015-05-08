import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var beaches = this.store.find('beach');
    return beaches;
  }
});
