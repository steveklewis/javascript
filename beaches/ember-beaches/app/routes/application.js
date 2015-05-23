import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    openModal: function(modalName) {
      return this.render(modalName, {
        into: 'application',
        outlet: 'modal',
        model: {'name': '',
                'score': 100}
      });
    },
    closeModal: function(model) {
      this.store.createRecord('beach', model);
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});
