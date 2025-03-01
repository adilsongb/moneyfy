import { StyleSheet, Text, View } from "react-native";

export default function DayWeekbutton() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Seg</Text>
      <Text style={styles.text}>24</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7E40D6",
    width: 40,
    height: 65,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#ffffff"
  }
});
