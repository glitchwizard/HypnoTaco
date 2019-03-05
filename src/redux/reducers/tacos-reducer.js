import type from '../../redux';

export default function(state = {}, action) {

  switch (action.type) {
    case type.ADD_TACO:
      const { id, tacoName, ingredientId, ingredient } = action.payload;

      console.log('add taco state');
      console.log(state);

      return {
        ...state,
        [id]: {
          id: id,
          tacoName: tacoName,
          ingredients: {
            ingredientId: ingredient
          },
          completed: false
        }
      };

    case type.LOG__CURRENT_STATE:
    console.log('-----');
      console.log('state');
      console.log(state);
      console.log('');
      return state;

    default:
      return state;

  }
}
