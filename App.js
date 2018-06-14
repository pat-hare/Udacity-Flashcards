import React from 'react';
import {
  createStore,
  applyMiddleware
} from 'redux'
import { Provider } from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {
  Notifications,
  Permissions
} from 'expo'
import reducer from './reducers'
import { MainNavigator } from './components/Navigation'

const NOTIFICATION_KEY = 'FlashcardDecks:notifications'

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    const store = createStore(reducer, applyMiddleware(thunk,logger))
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync())
}

function createNotification() {
  return {
    title: 'Complete a quiz today!',
    body: 'Make sure to complete one of your flashcard quizzes today!',
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  }
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
