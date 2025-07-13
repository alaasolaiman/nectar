import CustomButton from "@/app/components/CustomButton/CustomButton";
import CustomText from "@/app/components/CustomText/CustomText";
import OnBoardingBackground from "@/assets/images/onBoarding.png";
import Logo from "@/assets/images/logo.png";
import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

const OnBoarding = () => {
  const router = useRouter();

  const handleGetStartedPress = () => {
    router.push("/(screens)/SelectLocation");
    // router.push("/(screens)/SignIn");
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={OnBoardingBackground} style={styles.backgroundImage}>
        <Image source={Logo} />

        <CustomText style={styles.onBoardingTitle}>Welcome to our store</CustomText>
        <CustomText style={styles.onBoardingSubTitle}>
          Get your groceries in as fast as one hour
        </CustomText>

        <CustomButton
          text={"Get Started"}
          style={styles.getStartedButton}
          onPress={handleGetStartedPress}
        />
      </ImageBackground>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: width,
    height: height + 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 75,
  },
  onBoardingTitle: {
    color: "#fff",
    fontSize: 48,
    textAlign: "center",
    paddingInline: 60,
    paddingTop: 35,
    paddingBottom: 18,
  },
  onBoardingSubTitle: {
    color: "#FCFCFC",
    fontSize: 16,
    textAlign: "center",
    opacity: 0.7,
  },
  getStartedButton: {
    backgroundColor: "#53B175",
    width: "80%",
    paddingBlock: 25,
    borderRadius: 19,
    marginTop: 40,
  },
});
