import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'

class DeckView extends React.Component {
  render() {
    console.log('DeckView: ', this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.bigBlueTitle}>{this.props.navigation.state.params.itemId}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            this.props.navigation.navigate('Quiz', {
              itemId: this.props.navigation.state.params.itemId,
              cards: this.props.navigation.state.params.cards,
              questions: this.props.navigation.state.params.questions
            })}
        >
          <Text style={styles.buttonText}>Start Quiz!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            this.props.navigation.navigate('AddCard', {
              itemId: this.props.navigation.state.params.itemId
            })}
        >
          <Text style={styles.buttonText}>Add a Card!</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginTop: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#07575b'
  },
  buttonText: {
    padding: 10,
    color: '#c4dfe6'
  },
  bigBlueTitle: {
    color: '#003b46',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center'
  }
})

export default DeckView
