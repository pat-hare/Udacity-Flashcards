import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions/index'

class AddCard extends React.Component {
  state = {
    questionInput: '',
    answerInput: ''
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigBlueTitle}>
          Add Card:
        </Text>
        <View style={styles.button}>
          <Text style={{textAlign: 'center'}}>Question:</Text>
          <TextInput
            style={{height: 40, width: 200, color: '#003b46', textAlign: 'center'}}
            placeholder="Type here to set your question!"
            onChangeText={(input) => this.setState({questionInput: input})}
          />
        </View>
        <View style={styles.button}>
          <Text style={{textAlign: 'center'}}>Answer:</Text>
          <TextInput
            style={{height: 40, width: 200, color: '#003b46', textAlign: 'center'}}
            placeholder="Type here to set your answer!"
            onChangeText={(input) => this.setState({answerInput: input})}
          />
        </View>
        <Button
          style={{height: 40, padding: 25, color: '#66a5ad'}}
          onPress={() => this.props.actions.addCardAction({
            deck: this.props.navigation.state.params.itemId,
            question: this.state.questionInput,
            answer: this.state.answerInput
          }) && this.props.navigation.popToTop()
          && Alert.alert('Submitted!')}
          title='Submit'
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

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(null, mapDispatchToProps)(AddCard)
