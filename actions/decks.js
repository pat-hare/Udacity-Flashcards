import { addNewDeck } as api from '../utils/api';

export const ADD_DECK = 'ADD_DECK';

export function addDeck(decks) {
  return {
    type: ADD_DECK,
    decks
  };
}

export const addDeck = data => dispatch =>
  addNewDeck(data).then(decks => dispatch(addDeck(decks)));
