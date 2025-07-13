import { FC, JSX } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface CustomButtonProps {
  text: string;
  onPress: () => void;
  backgroundColor?: string;
  pressedColor?: string;
  textColor?: string;
  icon?: JSX.Element;
  style?: object;
  textStyle?: object;
}
const CustomButton: FC<CustomButtonProps> = ({
  text,
  onPress,
  backgroundColor = "#841584",
  pressedColor = "#6e3b6e",
  textColor = "#fff",
  icon = undefined,
  style,
  textStyle,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? pressedColor : backgroundColor },
        style,
      ]}
      onPress={onPress}
    >
      {icon}
      <Text style={[styles.text, { color: textColor }, textStyle]}>{text}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  text: {
    textAlign: "center",
  },
});
