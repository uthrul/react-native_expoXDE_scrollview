import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.containerFont}>Hello World</Text>
        <Text>Hello React</Text>
        <Text>Hello React Native</Text>
        <Text>Hello Java Script</Text>
        <Text style={styles.containerFont}>Hello Expo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerFont: {
    fontSize: 30,
  }
});
