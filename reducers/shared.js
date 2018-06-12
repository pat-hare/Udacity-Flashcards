import { GET_DECKS } from '../actions/shared';
import { ADD_CARD } from '../actions/cards'
import { ADD_DECK } from '../actions/decks';

function deckReducers(state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      return {
        ...state,
        ...action.decks
      };
    case ADD_CARD:
      return {
        ...state,
        ...action.decks
      };
  }
}

export default deckReducers;
