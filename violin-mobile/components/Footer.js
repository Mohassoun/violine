import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>\u00a9 2023 Violin Tuner</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#222',
  },
  text: {
    color: '#aaa',
    textAlign: 'center',
  },
});
