import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function Home() {
  return (
    <View >
      <Text style={styles.Title}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Title: {
    marginTop: 16,
    paddingVertical: 8,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
