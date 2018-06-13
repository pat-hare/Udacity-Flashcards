import React from 'react'
import { View, Text, Button, AsyncStorage, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions'
import { DECK_STORAGE_KEY } from '../utils/api'

class DeckList extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  renderItem = ({ item }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          this.props.navigation.navigate('DeckView', {
            itemId: item.title,
            cards: item.questions.length,
            questions: item.questions
          })}
      >
        <Text style={styles.buttonText}>{item.title}</Text>
        <Text style={styles.buttonText}>{item.questions.length} Cards</Text>
      </TouchableOpacity>
    </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigBlueTitle}>Pick a deck:</Text>
        <FlatList
          data={Object.values(this.props.decks)}
          renderItem={this.renderItem}
        />
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

function mapStateToProps ({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)
