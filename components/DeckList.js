import React from 'react'
import { View, Text, Button } from 'react-native'

class DeckList extends React.Component {
  render() {
    return (
      <View>
        <Button title='Individual Deck'
          onPress={() => this.props.navigation.navigate('DeckView')} />
      </View>
    )
  }
}

export default DeckList
