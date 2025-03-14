import { Colors, type ColorsName } from "@/constants/Colors";
import tokens from "@/constants/tokens";
import type { BaseElementStyleProps } from "@/types/general";
import { StyleProp, ViewStyle } from "react-native";

export function getColor(color: string) {
  const preSetColor = Colors.light[color as ColorsName];

  if (preSetColor) return preSetColor;

  return color;
}

export function getRestPropsStyle(
  props: BaseElementStyleProps,
): StyleProp<ViewStyle> {
  return {
    ...props,

    ...(props.bgColor && {
      backgroundColor: getColor(props.bgColor as ColorsName),
    }),

    ...(props.borderRadius && {
      borderRadius: tokens.borders.radius[props.borderRadius],
    }),

    ...(props.borderColor && {
      borderColor: getColor(props.borderColor as ColorsName),
    }),

    ...(props && { width: props.width }),
    ...(props.height && { height: props.height }),

    ...(props.m && { margin: tokens.spacing[props.m] }),
    ...(props.mt && { marginTop: tokens.spacing[props.mt] }),
    ...(props.mb && { marginBottom: tokens.spacing[props.mb] }),
    ...(props.mr && { marginRight: tokens.spacing[props.mr] }),
    ...(props.ml && { marginLeft: tokens.spacing[props.ml] }),
    ...(props.mh && { marginHorizontal: tokens.spacing[props.mh] }),
    ...(props.mv && { marginVertical: tokens.spacing[props.mv] }),

    ...(props.p && { padding: tokens.spacing[props.p] }),
    ...(props.pt && { paddingTop: tokens.spacing[props.pt] }),
    ...(props.pb && { paddingBottom: tokens.spacing[props.pb] }),
    ...(props.pr && { paddingRight: tokens.spacing[props.pr] }),
    ...(props.pl && { paddingLeft: tokens.spacing[props.pl] }),
    ...(props.ph && { paddingHorizontal: tokens.spacing[props.ph] }),
    ...(props.pv && { paddingVertical: tokens.spacing[props.pv] }),
  };
}
