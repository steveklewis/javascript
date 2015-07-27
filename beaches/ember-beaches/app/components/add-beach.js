import Ember from 'ember';

export default Ember.Component.extend({
  model: function() {
    var beaches = this.store.find('beach');
    return beaches;
  },
  beachName: '',
  beachScore: '',
  actions: {
    addBeach: function() {
      var newBeach = {'name': this.get('beachName'),
                      'score': this.get('beachScore')};
      this.sendAction('newBeach', newBeach);
    }
  }

});
