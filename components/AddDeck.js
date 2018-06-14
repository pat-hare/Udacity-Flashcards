import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Alert
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions/index'

class AddDeck extends React.Component {
  state = {
    inputText: ''
  }
  render() {
    return (
      <View style={styles.button}>
        <Text style={styles.bigBlueTitle}>
          Add Deck
        </Text>
        <View style={{height: 80, backgroundColor: '#c4dfe6'}}>
          <Text style={{textAlign: 'center'}}>Deck Title:</Text>
          <TextInput
            style={{height: 40, color: '#003b46', textAlign: 'center'}}
            placeholder="Type here to set your deck title!"
            onChangeText={(input) => this.setState({inputText: input})}
          />
        </View>
        <Button
          style={{height: 40, color: '#66a5ad'}}
          onPress={() => this.props.actions.addDeckAction(this.state.inputText)
            && Alert.alert('Submitted!')}
          title='Submit'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    padding: 5,

  },
  bigBlueTitle: {
    color: '#003b46',
    fontWeight: 'bold',
    fontSize: 75,
    textAlign: 'center'
  }
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(null, mapDispatchToProps)(AddDeck)
