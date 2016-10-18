import Ember from 'ember';

import connect from 'ember-redux/components/connect';

var stateToComputed = (state) => {
  return {
    isWide: state.isWide
  };
};

var dispatchToActions = (dispatch) => {
  return {
    toggleImageSize: function() {
      debugger;
      dispatch({type: 'TOGGLE_IMAGE_SIZE'});
    }
  };
};




var RentalListingComponent =  Ember.Component.extend({
  isWide: false,
  actions: {
    toggleImageSize() {
      debugger;
      this.toggleProperty('isWide');
    }
  }
});

export default connect(stateToComputed, dispatchToActions)(RentalListingComponent);
