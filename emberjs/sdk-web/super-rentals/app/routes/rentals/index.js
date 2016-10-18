import Ember from 'ember';
//import

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  redux: Ember.inject.service(),

  actions: {
    filterByCity(param) {
      if (param !== '') {
        return this.get('store').query('rental', { city: param });
      } else {
        return this.get('store').findAll('rental');
      }
    }
  },

  model() {
    // Skip Ember Data here and hit the api directly using Ajax,
    // then dispatch raw data to Redux to initialize data.
    return this.get('ajax').request('/api/rentals').then(response => this.get('redux').dispatch({
      type: 'DESERIALIZE_RENTALS',
      response, response
    }));
  }
});
