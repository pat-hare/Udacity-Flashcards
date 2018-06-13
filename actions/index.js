import { getDecks, addDeckToAsync, addCardToAsync } from '../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'

function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

function addDeckAction (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export const fetchDecks = () => dispatch => getDecks().then(
  decks => dispatch(receiveDecks(decks))
)

export const addDeck = (data) => dispatch => addDeckToAsync(data).then(
  deck => dispatch(addDeckAction(deck))
)
