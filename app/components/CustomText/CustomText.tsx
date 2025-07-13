// components/CustomText.tsx
import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";

export default function CustomText(props: TextProps) {
  return <Text {...props} style={[styles.text, props.style]} />;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "gilroy-medium",
  },
});
