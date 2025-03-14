import { ScreenView, ThemedText } from "@/components";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function Page() {
  return (
    <ScreenView p="md">
      <Stack.Screen options={{ headerShown: false }} />
      <ThemedText color="primary">Tela de introdução</ThemedText>

      <Link href="/home" asChild>
        <Pressable>
          <ThemedText color="primary">Go to Home</ThemedText>
        </Pressable>
      </Link>

      <Link href="/modal/hello" asChild>
        <Pressable>
          <ThemedText color="primary">Open modal 1</ThemedText>
        </Pressable>
      </Link>

      <Link href="/modal/bye" asChild>
        <Pressable>
          <ThemedText color="primary">Open modal 2</ThemedText>
        </Pressable>
      </Link>
    </ScreenView>
  );
}
