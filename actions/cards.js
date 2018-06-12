import { addDeckCard } as api from '../utils/api';

export const ADD_CARD = 'ADD_CARD';

export function addCard(decks) {
  return {
    type: ADD_CARD,
    decks
  };
}

export const addCard = data => dispatch =>
  addDeckCard(data).then(decks => dispatch(addCard(decks)));
