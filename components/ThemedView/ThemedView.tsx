import { View } from "react-native";

import { getRestPropsStyle } from "@/utils/get";
import type { ThemedViewProps } from "./ThemedView.type";

export default function ThemedView({
  style,
  children,
  ...rest
}: ThemedViewProps) {
  return (
    <View {...rest} style={[style, getRestPropsStyle(rest)]}>
      {children}
    </View>
  );
}
