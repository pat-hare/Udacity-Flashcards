import { AsyncStorage } from 'react-native'

export const DECK_STORAGE_KEY = 'FlashcardDecks'

export const getDecks = () => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(data => JSON.parse(data))
}

export const addDeckToAsync = newDeck => {
  AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(newDeck)).then(data => newDeck)
}

export const addCardToAsync = deck => {
  AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(deck)).then(data => deck)
}
