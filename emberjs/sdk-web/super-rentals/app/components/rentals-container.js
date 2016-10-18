import Ember from 'ember';
import connect from 'ember-redux/components/connect';

var stateToComputed = (state) => {
  return {
    rentals: state.rentals.all
  };
};

var dispatchToActions = (dispatch) => {
  return {
    toggleImageSize: () => {
      debugger;
      dispatch({type: 'TOGGLE_IMAGE_SIZE'});
    },
    filter: (param) => {
      debugger;
      if (param !== '') {
        dispatch({type: 'FILTER_BY_CITY'});
      } else {
        dispatch({type: 'FILTER_ALL'})
      }
    },
    filterByCity() {
      debugger;
      if (param !== '') {
        dispatch({type: 'FILTER_BY_CITY'});
      } else {
        dispatch({type: 'FILTER_ALL'})
      }
    },
    handleFilterEntry(filterInputValue) {
      let filterAction = this.get('filter');
      debugger;
      filterAction(filterInputValue).then((filterResults) => this.set('results', filterResults));
    }
  };
};

var RentalsContainer = Ember.Component.extend({
});


export default connect(stateToComputed, dispatchToActions)(RentalsContainer);
