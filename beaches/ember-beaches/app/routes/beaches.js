import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var beaches = this.store.find('beach');
    return beaches;
  },
  actions: {
    saveBeach: function(beach) {
      var newRecord = this.store.createRecord('beach', beach);
      newRecord.save();
    }
  }
});
