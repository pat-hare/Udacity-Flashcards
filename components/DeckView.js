import React from 'react'
import { View, Text, Button } from 'react-native'

class DeckView extends React.Component {
  render() {
    return (
      <View>
        <Button title='Quiz'
          onPress={() => this.props.navigation.navigate('Quiz')} />
      </View>
    )
  }
}

export default DeckView
