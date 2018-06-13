import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { MainNavigator } from './components/Navigation'

export default class App extends React.Component {
  render() {
    const store = createStore(reducer, applyMiddleware(thunk,logger))
    console.log(store.getState())
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
