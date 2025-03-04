import { Text, type TextProps } from "react-native";
import { styles } from "./ThemedText.style";
import { getColor } from "@/utils/get";

export type ThemedTextProps = TextProps & {
  color?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export default function ThemedText({
  style,
  color,
  type = "default",
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      style={[
        styles.base,
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        color && { color: getColor(color) },
        style,
      ]}
      {...rest}
    />
  );
}
