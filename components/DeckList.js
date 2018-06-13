import React from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { fetchDecks } from '../actions'

class DeckList extends React.Component {
  componentDidMount() {
    this.props.fetchDecks()
  }
  render() {
    console.log(this.state)
    return (
      <View>
        <Button title='Individual Deck'
          onPress={() => this.props.navigation.navigate('DeckView')} />
      </View>
    )
  }
}

function mapStateToProps ({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps, { fetchDecks })(DeckList)
