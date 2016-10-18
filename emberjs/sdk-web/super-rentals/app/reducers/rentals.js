import { uniq, remove } from 'super-rentals/utils/array';

const initialState = {
  all: []
};

export default ((state, action) => {
  if (action.type === 'DESERIALIZE_RENTALS') {

    let uniqs = uniq(state.all, action.response);
    let initialRentalState = uniqs[0].data.map(function(rental) {
      return {
        'model': rental,
        'isWide': false
      };
    });

    console.log(initialRentalState);
    debugger;
    return Object.assign({}, state, {
      all: initialRentalState
    });
  }

  if (action.type === 'TOGGLE_IMAGE_SIZE') {
    return Object.assign({}, state, {
      'isWide': ''
    });
  }

  return state || initialState;
});
