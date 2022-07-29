import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Title from '../components/title';
import { TouchableOpacity } from 'react-native-web';
import GOT from '../assets/game-of-thrones.jpeg';

const home = () => {
  return (
    <View>
      <Title />
      <View>
        <GOT />
      </View>
      <TouchableOpacity>
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({});
