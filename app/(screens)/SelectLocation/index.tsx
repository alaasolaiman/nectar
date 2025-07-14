import CustomText from "@/app/components/CustomText/CustomText";
import BluryOrangeBackground from "@/assets/images/bluryOrangeBackground.png";
import location from "@/assets/images/location.png";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";

const { height, width } = Dimensions.get("window");

const SelectLocation = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={BluryOrangeBackground}
        style={styles.backgroundImage}
      >
        <Image source={location} style={styles.locationImage} />
      </ImageBackground>

      <View style={styles.selectLocationTextContainer}>
        <CustomText style={styles.selectLocationText}>
          Select Your Location
        </CustomText>
        <CustomText style={styles.selectLocationSubText}>
          Swithch on your location to stay in tune with what’s happening in your
          area
        </CustomText>
      </View>

      <View>
        {/* <CustomText style={styles.label}>Code</CustomText> */}
      </View>
    </View>
  );
};

export default SelectLocation;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCFCFC",
    flex: 1,
  },
  backgroundImage: {
    paddingHorizontal: width * 0.06,
    height: height * 0.25,
  },
  locationImage: {
    alignSelf: "center",
    marginTop: height * 0.15,
    width: width * 0.6,
  },
  selectLocationTextContainer: {
    alignItems: "center",
    marginTop: height * 0.15,
    paddingHorizontal: width * 0.06,
  },
  selectLocationText: { textAlign: "center", fontSize: 28, color: "#181725" },
  selectLocationSubText: {
    textAlign: "center",
    fontSize: 16,
    color: "#7C7C7C",
    marginTop: 15,
  },
  // label: {}
});
