import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text>
      {/* Not a regular button element because needs certain extra things to be cross-compatible: */}
      <Button
        onPress={() => {
          alert("You tapped the button!");
        }}
        title="Press Me"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    margin: 20, // '1rem' or '10px' broke it because it expects a number, not strings
    fontSize: 30,
    textAlign: "center",
  },
});
