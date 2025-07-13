import CustomText from "@/app/components/CustomText/CustomText";
import React, { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInputProps,
  View,
} from "react-native";

import useKeyboard from "@/app/hooks/useKeyboard";
import BluryOrangeBackground from "@/assets/images/bluryOrangeBackground.png";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const { height, width } = Dimensions.get("window");

const CELL_COUNT = 4;
const autoComplete = Platform.select<TextInputProps["autoComplete"]>({
  android: "sms-otp",
  default: "one-time-code",
});

const Verification = () => {
  const router = useRouter();

  const isKeyboardVisible = useKeyboard();

  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const isNextDisabled = !value.length;

  console.log("value", value);

  const handleOnNextPress = () => {
    router.push("(screens)/SelectLocation");
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
        <CustomText style={styles.title}>Enter your 4-digit code</CustomText>

        <CustomText style={styles.phoneInputLabel}>Code</CustomText>
      </ImageBackground>

      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoComplete={autoComplete}
        testID="my-code-input"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused && <Cursor />)}
          </Text>
        )}
      />

      <View style={styles.bodyWrapper}>
        <Pressable
          style={[
            styles.resendCodePressable,
            { marginBottom: isKeyboardVisible ? height * 0.06 : height * 0.1 },
          ]}
        >
          <Text style={styles.resendCodeText}>Resend Code</Text>
        </Pressable>

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

export default Verification;

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
    flexDirection: "row",
    justifyContent: "space-between",
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
  resendCodePressable: {
    marginTop: "auto",
  },
  resendCodeText: { fontSize: 18, color: "#53B175" },
  arrowCirclePressable: { marginTop: "auto" },
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
  codeFieldRoot: {
    marginTop: 20,
    paddingHorizontal: width * 0.06,
    width: "100%",
    paddingRight: "80%",
    gap: 10,
  },
  cell: {
    width: 20,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderBottomWidth: 2,
    borderColor: "#000",
    textAlign: "center",
    color: "#000", // text color
  },
  focusCell: {
    borderColor: "#000",
  },
});
