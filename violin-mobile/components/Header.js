import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Violin Tuner</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#222',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
