import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Quiz = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity>
          <Text>First Question</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.options}>
        <TouchableOpacity>
          <Text>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Option 3</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Option 4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottoms}>
        <TouchableOpacity>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    padding: 12
  },
  top: {
    marginVertical: 16
  },
  options: {
    marginVertical: 16,
    flex: 1
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});
