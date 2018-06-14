import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions/index'

class AddCard extends React.Component {
  render() {
    return (
      <View>
        <Text>AddCard</Text>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(null, mapDispatchToProps)(AddCard)
