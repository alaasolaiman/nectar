import Logo from "@/assets/images/logo.png";
import React, { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomText from "@/app/componets/CustomText/CustomText";

export default function Index() {


  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [fadeAnim]);


  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.logoWrapper, { opacity: fadeAnim }]}>
        <Image source={Logo} />
        <View>
          <CustomText style={styles.logoText}>nectar</CustomText>
          <CustomText style={styles.logoSubText}>Online Groceries</CustomText>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },
  logoWrapper: {
    flexDirection: "row",
    gap: 18,
    alignItems: "center",
  },
  logoText: {
    fontSize: 48,
    color: "#fff",
  },
  logoSubText: {
    fontSize: 18,
    color: "#fff",
  },
});
