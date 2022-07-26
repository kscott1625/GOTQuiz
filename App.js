import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Results from './screens/results';

const App = () => {
  return (
    <View style={styles.container}>
      <Quiz />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16
  }
});
