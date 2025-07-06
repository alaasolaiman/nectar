import LoadingScreen from "@/app/componets/LoadingScreen/LoadingScreen";
import Login from "@/app/Screens/Login/Login";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [fontsLoaded] = useFonts({
    "gilroy-medium": require("@/assets/fonts/gilroy-medium.ttf"),
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? <LoadingScreen /> : <Login />}
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
});
