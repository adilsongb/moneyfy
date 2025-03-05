import { getRestPropsStyle } from "@/utils/get";
import { ScrollView } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import type { ScreenViewProps } from "./ScreenView.type";
import { Stack } from "expo-router";

export default function ScreenView({
  safeArea = true,
  style,
  ...rest
}: ScreenViewProps) {
  return (
    <SafeAreaView
      edges={safeArea ? undefined : []}
      style={[style, { flex: 1 }, getRestPropsStyle(rest)]}
    >
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView {...rest} />
    </SafeAreaView>
  );
}
