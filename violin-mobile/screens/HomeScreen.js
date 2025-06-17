import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Violin Tuner</Text>
      <Button title="About Us" onPress={() => navigation.navigate('About')} />
      <Button title="Contact" onPress={() => navigation.navigate('Contact')} />
      <Button title="Our History" onPress={() => navigation.navigate('History')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
});
