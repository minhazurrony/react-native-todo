import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Todo App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 30
  }
});

export default Header;
