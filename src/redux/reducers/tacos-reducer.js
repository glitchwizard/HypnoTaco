import type from '../../redux';

const initialState = {}

export default function(state = {}, action) {

  console.log('reducer');

  switch (action.type) {
    case type.ADD_TACO:
      const { id, tacoName } = action.payload;
      console.log('add taco state');
      console.log(state);
      return {
        ...state,
        [id]: {
          id: id,
          tacoName: tacoName,
          completed: false
        }
      };

    case type.LOG__CURRENT_STATE:
      console.log('state');
      console.log(state);
      return state;

    default:
      return state;

  }
}
