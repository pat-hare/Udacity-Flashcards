import React from 'react'
import { View, Text, Button } from 'react-native'

class Quiz extends React.Component {
  render() {
    return (
      <View>
        <Button title='Home'
          onPress={() => this.props.navigation.popToTop()} />
      </View>
    )
  }
}

export default Quiz
