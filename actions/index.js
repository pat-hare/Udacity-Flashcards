import { addDeckToAsync, addCardToAsync, getInitialData } from '../utils/api'
import { fetchDecksFromAsync } from '../utils/_DATA'

export const ADD_CARD = 'ADD_CARD'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'

function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addDeckAction (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function addCardAction (card) {
  return {
    type: ADD_CARD,
    card
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
