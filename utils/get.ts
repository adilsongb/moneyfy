import { Colors, type ColorsName } from "@/constants/Colors";

export function getColor(color: string) {
  const preSetColor = Colors.light[color as ColorsName];

  if (preSetColor) return preSetColor;

  return color;
}
