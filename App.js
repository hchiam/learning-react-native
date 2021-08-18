import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SectionList,
  ActivityIndicator,
  AccessibilityInfo,
  Linking,
} from "react-native";
import { OpenURLButton } from "./components/OpenURLButton.js";

export default function App() {
  const [text, setText] = useState("");
  const [reduceMotionEnabled, setReduceMotionEnabled] = useState(false);
  const [screenReaderEnabled, setScreenReaderEnabled] = useState(false);

  useEffect(() => {
    const reduceMotionChangedSubscription = AccessibilityInfo.addEventListener(
      "reduceMotionChanged",
      (reduceMotionEnabled) => {
        setReduceMotionEnabled(reduceMotionEnabled);
      }
    );
    const screenReaderChangedSubscription = AccessibilityInfo.addEventListener(
      "screenReaderChanged",
      (screenReaderEnabled) => {
        setScreenReaderEnabled(screenReaderEnabled);
      }
    );

    AccessibilityInfo.isReduceMotionEnabled().then((reduceMotionEnabled) => {
      setReduceMotionEnabled(reduceMotionEnabled);
    });
    AccessibilityInfo.isScreenReaderEnabled().then((screenReaderEnabled) => {
      setScreenReaderEnabled(screenReaderEnabled);
    });

    return () => {
      reduceMotionChangedSubscription.remove();
      screenReaderChangedSubscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text>
      <Text>text: {text}</Text>
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
        style={styles.SectionList}
        // horizontal="true"
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
      <Text style={styles.status}>
        {/* <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion"
          target="_blank"
        >
          <code>prefers-reduced-motion</code>
        </a> */}
        <OpenURLButton
          style={styles.OpenURLButton}
          url={
            "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion"
          }
        >
          prefers-reduced-motion
        </OpenURLButton>{" "}
        is {reduceMotionEnabled ? "enabled" : "disabled"}.
      </Text>

      <Text style={styles.status}>
        Screen reader is {screenReaderEnabled ? "enabled" : "disabled"}.
      </Text>
      <ActivityIndicator size="large" color="#0000ff" style={styles.spinner} />
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
  SectionList: {
    flexDirection: "row", // doesn't work
  },
  item: {
    backgroundColor: "navy",
    color: "white",
    padding: 10,
    marginVertical: 8,
    borderRadius: 5,
    textAlign: "center",
  },
  status: {
    backgroundColor: "yellow",
    padding: 10,
    borderRadius: 5,
  },
  OpenURLButton: {
    fontFamily: "monospace",
    backgroundColor: "black",
    color: "lime",
    textDecorationLine: "underline",
    padding: 1,
    borderRadius: 3,
  },
  spinner: {
    position: "absolute",
    left: "50%",
    top: "50%",
    // transform: "translate(-50%)",
  },
});
