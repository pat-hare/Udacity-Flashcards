import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import AddCard from './AddCard'
import AddDeck from './AddDeck'
import DeckList from './DeckList'
import DeckView from './DeckView'
import Quiz from './Quiz'

const Tabs = createBottomTabNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Ionicons name='md-home' size={30} color={tintColor} />
    }
  },
  AddQuiz: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Quiz',
      tabBarIcon: ({ tintColor }) => <Ionicons name='md-add' size={30} color={tintColor} />
    }
  }
})

export const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckView: {
    screen: DeckView,
  },
  Quiz: {
    screen: Quiz,
  },
  AddCard: {
    screen: AddCard,
  }
})
