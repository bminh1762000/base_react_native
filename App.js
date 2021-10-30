import React from 'react';
import {View, StyleSheet} from 'react-native';

const App = () => {
  return <View style={styles.container}>Base App</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default App;
