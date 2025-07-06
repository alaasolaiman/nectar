import { useFonts } from "expo-font";
import { Text, View } from "react-native";
import CustomText from "./componets/CustomText";

export default function Index() {
  const [fontsLoaded] = useFonts({
    "gilroy-medium": require("@/assets/fonts/gilroy-medium.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CustomText>Edit app/index.tsx to edit this screen.</CustomText>
    </View>
  );
}
