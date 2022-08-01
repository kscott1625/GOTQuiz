import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import Title from '../components/title';

const home = () => {
  return (
    <View>
      <Title />
      <View style={styles.bannerContainer}>
        <Image
          source={require('../assets/game-of-thrones.jpeg')}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity>
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
