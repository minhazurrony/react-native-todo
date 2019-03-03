import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>hi</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#33ccff',
    flex: 1,
    paddingTop: 60,
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 20
  }
});
