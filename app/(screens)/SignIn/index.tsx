import CustomButton from "@/app/components/CustomButton/CustomButton";
import CustomText from "@/app/components/CustomText/CustomText";
import SignInImage from "@/assets/images/signIn.png";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import { Dimensions, Image, Pressable, StyleSheet, View } from "react-native";
import PhoneInput from "react-native-phone-number-input";

export default function SignIn() {
  const router = useRouter();

  const phoneInput = useRef<any>(null);
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");

  const handlecontinuewithGooglePress = () => {};
  const handlecontinuewithFacebookPress = () => {};

  const handlePhoneInputPress = () => {
    router.push("/(screens)/PhoneNumber");
  };
  return (
    <View style={styles.container}>
      <Image source={SignInImage} />
      <CustomText style={styles.title}>
        Get your groceries with nectar
      </CustomText>
      <Pressable onPress={handlePhoneInputPress}>
        <PhoneInput
          ref={phoneInput}
          defaultValue={value}
          defaultCode="LB"
          layout="first"
          withDarkTheme={false}
          withShadow={false}
          containerStyle={styles.phoneContainer}
          textContainerStyle={styles.textInput}
          disableArrowIcon
          disabled
        />
      </Pressable>

      <CustomText style={styles.connectWithSocialMediaText}>
        Or connect with social media
      </CustomText>

      <CustomButton
        text={"Continue with Google"}
        style={styles.continuewithGoogleButton}
        onPress={handlecontinuewithGooglePress}
        icon={<AntDesign name="google" size={24} color="white" />}
      />
      <CustomButton
        text={"Continue with Facebook"}
        style={styles.continuewithFacebookButton}
        onPress={handlecontinuewithFacebookPress}
        icon={<FontAwesome name="facebook-f" size={24} color="white" />}
      />
    </View>
  );
}

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFEFE",
  },
  title: {
    color: "#030303",
    fontSize: height * 0.03, // roughly 26px on typical screens
    paddingLeft: width * 0.06,
    paddingBottom: height * 0.03,
    maxWidth: "70%",
    fontWeight: "bold",
  },
  phoneContainer: {
    backgroundColor: "#FEFEFE",
    width: "90%",
    height: height * 0.07, // Responsive height
    alignSelf: "center",
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
  },
  textInput: {
    paddingVertical: 0,
    paddingLeft: 0,
    backgroundColor: "#FEFEFE",
  },
  connectWithSocialMediaText: {
    color: "#828282",
    fontSize: height * 0.017,
    textAlign: "center",
    paddingVertical: height * 0.045,
  },
  continuewithGoogleButton: {
    backgroundColor: "#5383EC",
    width: "80%",
    paddingVertical: height * 0.025,
    borderRadius: 19,
    alignSelf: "center",
    flexDirection: "row",
    paddingHorizontal: width * 0.05,
    gap: width * 0.04,
  },
  continuewithFacebookButton: {
    backgroundColor: "#4A66AC",
    width: "80%",
    paddingVertical: height * 0.025,
    borderRadius: 19,
    alignSelf: "center",
    marginTop: height * 0.015,
    flexDirection: "row",
    paddingHorizontal: width * 0.05,
    gap: width * 0.04,
  },
});
