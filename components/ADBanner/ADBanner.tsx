import { useRef } from "react";
import { StyleSheet, View } from "react-native";
// import {
//   BannerAd,
//   BannerAdSize,
//   TestIds,
// } from "react-native-google-mobile-ads";

// const adUnitId = TestIds.ADAPTIVE_BANNER;

export default function ADBanner() {
  // const bannerRef = useRef<BannerAd>(null);

  return (
    <View style={styles.container}>
      {/* <BannerAd
        ref={bannerRef}
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dbdbdb",
    width: "100%",
    height: 60,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  text: {
    color: "#ffffff",
  },
});
