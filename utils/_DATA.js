import { AsyncStorage } from 'react-native';
import { DECK_STORAGE_KEY } from './api'

const initialData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export function _getDecks() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...initialData}), 1000)
  })
}

export function setInitialData() {
  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(initialData))
  return initialData
}
