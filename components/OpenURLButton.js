import React, { useCallback } from "react";
import { Pressable, Text, Linking } from "react-native";

// example supported URL: "https://google.com";
// example UNsupported URL: "slack://open?team=123456";

export const OpenURLButton = ({ url, children, style }) => {
  const handlePress = useCallback(async () => {
    const isSupportedLink = await Linking.canOpenURL(url);

    if (isSupportedLink) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <Pressable onPress={handlePress}>
      <Text style={style}>{children}</Text>
    </Pressable>
  );
};
