import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
  _splash: {
    alignItems: 'center',
  },
  _splashText: {
    fontSize: 49,
    color: 'white',
    fontWeight: "900",
    paddingTop: 150,
    paddingLeft: 55
  },
  _splashImg: {
    width: 365,
    height: 365
  }
})

const splash = () => {
  return (
    <View style={styles._splash}>
      <ImageBackground style={styles._splashImg}  source={{uri: "https://lets-sync.s3-us-west-2.amazonaws.com/splashSpinner.gif"}} >
        <Text style={styles._splashText}>Let's Sync</Text>
      </ImageBackground>
    </View>
  );
}

export default splash;