import { AsyncStorage } from 'react-native'
import { _getDecks } from './_DATA'
import { setInitialData } from './_DATA'

export const DECK_STORAGE_KEY = 'FlashcardDecks:decks'

export function getInitialData() {
  return Promise.all([
    _getDecks(),
  ]).then(([decks]) => ({
    decks: decks
  })).then(
    setInitialData()
  )
}
