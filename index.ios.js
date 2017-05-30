/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var HelloWorld = require('./HelloWorld');
export default class NativeModule_HelloWorld extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: ""
    }
  }
  async  abc() {
    try {
      const value = await HelloWorld.greeting('Ankit Tyagi');
      console.log(value);
      this.setState({ name: value });
    } catch(e) {
      console.error(e)
    }
  }

  render() {
    this.abc()
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.state.name}</Text>
        <Text>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NativeModule_HelloWorld', () => NativeModule_HelloWorld);
