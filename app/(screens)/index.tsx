import OnBoarding from "@/app/(screens)/OnBoarding";
import LoadingScreen from "@/app/components/LoadingScreen/LoadingScreen";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? <LoadingScreen /> : <OnBoarding />}
    </View>
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
