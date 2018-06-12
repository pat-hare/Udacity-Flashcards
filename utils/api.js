import { AsyncStorage } from 'react-native';

export const DECK_STORAGE_KEY = 'Flashcards'

export const fetchDecks = () => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(data => JSON.parse(data));
}

export const addDeck = deck =>
  AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(deck)).then(
    data => deck
  );

export const addCard = deck =>
  AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(deck)).then(
    data => deck
  );
