/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> { 
    render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React N ative!</Text>

        <Image style={{width:300, height:300, marginBottom:50}} source={{uri:"https://www.fasdapsicanalise.com.br/content/uploads/2017/08/pregui%C3%A7a-696x415.jpg"}}/>

        <Button title="Teste" onPress={ ()=> {Alert.alert("Alerta customizado")}  }/>
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
