import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SectionList,
  ActivityIndicator,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
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
      <TextInput
        style={{ height: 40, textAlign: "center" }}
        placeholder="This is a TextInput!"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <SectionList
        sections={[
          { title: "Section 1", data: ["Apple", "Banana", "Carrot"] },
          {
            title: "Section 2",
            data: ["Ant", "Bear", "Cat"],
          },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => index}
      />
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff" />
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
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
  },
  item: {
    backgroundColor: "navy",
    padding: 10,
    marginVertical: 8,
    borderRadius: 5,
    textAlign: "center",
  },
});
