import { addDeckToAsync, addCardToAsync, getInitialData } from '../utils/api'
import { fetchDecksFromAsync } from '../utils/_DATA'


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

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ decks }) => {
        dispatch(receiveDecks(decks))
      })
  }
}
