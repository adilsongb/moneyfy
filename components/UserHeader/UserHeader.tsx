import { Image } from "react-native";
import ThemedText from "../ThemedText";
import ThemedView from "../ThemedView";

export default function UserHeader() {
  return (
    <ThemedView flexDirection="row" alignItems="center" mb="md">
      <ThemedView
        bgColor="background"
        width={50}
        height={50}
        borderRadius="circular"
        overflow="hidden"
        mr="sm"
      >
        <Image
          source={{ uri: "https://github.com/gabriel.png" }}
          resizeMode="center"
          style={{ flex: 1 }}
        />
      </ThemedView>
      <ThemedText type="default">Adilson Gabriel</ThemedText>
    </ThemedView>
  );
}
