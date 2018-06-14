import React from 'react'
import { View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import {
  setLocalNotification,
  clearLocalNotification
} from '../App'

class Quiz extends React.Component {
  state = {
    card: 1,
    correct: 0,
    answer: false
  }

  nextCard() {
    this.setState({
      card: this.state.card + 1,
      answer: false
    })
  }

  correct() {
    this.setState({
      correct: this.state.correct + 1
    })
    this.nextCard()
  }

  reset() {
    this.setState({
      card: 1,
      correct: 0,
      answer: false
    })
  }

  render() {
    if (this.state.card - 1 !== this.props.navigation.state.params.questions.length) {
      return(
        <View style={styles.container}>
          <Text>
            {this.state.card} / {this.props.navigation.state.params.cards}
          </Text>
          <Text>
            {this.props.navigation.state.params.questions[this.state.card - 1].question}
          </Text>
          {this.state.answer ?
            <View>
              <Text>
                {this.props.navigation.state.params.questions[this.state.card - 1].answer}
              </Text>
              <Button
                onPress={() => this.correct()}
                title='Correct'
              />
              <Button
                onPress={() => this.nextCard()}
                title='Incorrect'
              />
            </View>
          :
            <Button
              onPress={() => this.setState({answer: true})}
              title='Show Answer' />
          }
        </View>
      )
    }

    return(
      <View style={styles.container}>
        <Text style={styles.bigBlueTitle}>
          {this.state.correct} / {this.props.navigation.state.params.cards}
        </Text>
        <Button
          onPress={() => this.props.navigation.goBack()
            && clearLocalNotification().then(setLocalNotification)}
          title='Back to deck!'
        />
        <Button
          onPress={() => this.reset()
            && clearLocalNotification().then(setLocalNotification)}
          title='Start Over!'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center',
    justifyContent: 'space-between'
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

export default Quiz
