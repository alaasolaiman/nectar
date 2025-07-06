import CustomText from "@/app/componets/CustomText/CustomText";
import LoginBackground from "@/assets/images/login.png";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={LoginBackground} style={styles.backgroundImage}>
        <CustomText>test</CustomText>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: { width: "100%", height: "100%" },
  backgroundImage: {
    flex: 1,
  },
});
