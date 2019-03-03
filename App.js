import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import Header from './app/components/Header';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <Header />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#33ccff',
    flex: 1,
    paddingTop: 80,
    alignItems: 'center'
  }
});
