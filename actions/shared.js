import { fetchDecks } as api from '../utils/api';

export const GET_DECKS = 'GET_DECKS';

export function getDecks(decks) {
  return {
    type: GET_DECKS,
    decks
  };
}

export const fetchDecks = () => dispatch =>
  fetchDecks().then(decks => dispatch(getDecks(decks)));
