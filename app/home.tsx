import { ScreenView, UserHeader } from "@/components";
import ADBanner from "@/components/ADBanner";
import { Stack } from "expo-router";

export default function Home() {
  return (
    <ScreenView p="md">
      <Stack.Screen options={{ headerShown: false }} />
      <UserHeader />

      <ADBanner />
    </ScreenView>
  );
}
