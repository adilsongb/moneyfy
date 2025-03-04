import { ScreenView, ThemedText } from "@/components";
import { Stack } from "expo-router";

export default function Page() {
  return (
    <ScreenView>
      <Stack.Screen options={{ headerShown: false }} />
      <ThemedText color="primary">Tela de introdução</ThemedText>
    </ScreenView>
  );
}
