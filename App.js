import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Quiz</Text>
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
