import CustomText from "@/app/components/CustomText/CustomText";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";

import useKeyboard from "@/app/hooks/useKeyboard";
import BluryOrangeBackground from "@/assets/images/bluryOrangeBackground.png";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const { height, width } = Dimensions.get("window");

const PhoneNumber = () => {
  const isKeyboardVisible = useKeyboard();
  const router = useRouter();
  const phoneInput = useRef<any>(null);
  const [value, setValue] = useState("");

  const handlePhoneNumberChange = (text: string): void => {
    setValue(text);
  };

  const isNextDisabled = value.length < 6;

  const handleOnNextPress = () => {
    router.push("(screens)/Verification");
  };
  return (
    <KeyboardAwareScrollView
      style={styles.container}
      enableOnAndroid
      extraScrollHeight={20}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <ImageBackground
        source={BluryOrangeBackground}
        style={styles.backgroundImage}
      >
        <CustomText style={styles.title}>Enter your mobile number</CustomText>

        <CustomText style={styles.phoneInputLabel}>Mobile Number</CustomText>
      </ImageBackground>

      <View style={styles.bodyWrapper}>
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
          onChangeText={handlePhoneNumberChange}
          textInputProps={{
            maxLength: 10,
            keyboardType: "phone-pad",
          }}
        />

        <Pressable
          style={[
            styles.arrowCirclePressable,
            { marginBottom: isKeyboardVisible ? height * 0.04 : height * 0.08 },
          ]}
          disabled={isNextDisabled}
          onPress={handleOnNextPress}
        >
          <View
            style={[
              styles.arrowCircleContainer,
              isNextDisabled && styles.disabled,
            ]}
          >
            <MaterialCommunityIcons
              name="greater-than"
              size={24}
              color="white"
            />
          </View>
        </Pressable>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default PhoneNumber;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCFCFC",
    flex: 1,
  },
  backgroundImage: {
    paddingHorizontal: width * 0.06,
  },
  title: {
    color: "#181725",
    fontSize: width * 0.065,
    fontWeight: "bold",
    marginTop: height * 0.08,
  },
  bodyWrapper: {
    paddingHorizontal: width * 0.06,
    flex: 1,
    paddingBottom: height * 0.01,
  },
  phoneInputLabel: {
    color: "#7C7C7C",
    fontSize: width * 0.04,
    fontWeight: "bold",
    marginTop: height * 0.033,
    marginBottom: height * 0.01,
  },
  phoneContainer: {
    backgroundColor: "#FCFCFC",
    height: height * 0.07,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
    marginHorizontal: "auto",
    width: "100%",
    paddingHorizontal: width * 0.06,
  },
  textInput: {
    paddingVertical: 0,
    paddingLeft: 0,
    backgroundColor: "#FEFEFE",
  },
  arrowCirclePressable: {
    marginTop: "auto",
  },
  arrowCircleContainer: {
    width: 67,
    height: 67,
    backgroundColor: "#53B175",
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
  },
  disabled: {
    opacity: 0.5,
  },
});
