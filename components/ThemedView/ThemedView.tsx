import { View, type ViewProps } from "react-native";

export type ThemedViewProps = ViewProps;

export default function ThemedView({ style, ...rest }: ThemedViewProps) {
  return <View style={[style]} {...rest} />;
}
