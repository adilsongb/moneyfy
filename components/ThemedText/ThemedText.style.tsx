import { StyleSheet } from "react-native";

import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({
  base: {
    color: Colors.light.text,
  },
  default: {
    fontFamily: "Rubik-Regular",
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontFamily: "Rubik-Medium",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontFamily: "Rubik-Bold",
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontFamily: "Rubik-Bold",
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    fontFamily: "Rubik-Medium",
    lineHeight: 30,
    fontSize: 16,
    color: Colors.light.primary,
  },
});
