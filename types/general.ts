import type { DimensionValue, FlexStyle } from "react-native";
import tokens from "../constants/tokens";

export type SpacingTypes = keyof typeof tokens.spacing;

export type BorderRadiuTypes = keyof typeof tokens.borders.radius;

export type BaseElementStyleProps = {
  bgColor?: string;

  width?: DimensionValue;
  height?: DimensionValue;

  borderRadius?: BorderRadiuTypes;

  m?: SpacingTypes;
  mr?: SpacingTypes;
  ml?: SpacingTypes;
  mt?: SpacingTypes;
  mb?: SpacingTypes;
  mh?: SpacingTypes;
  mv?: SpacingTypes;
  p?: SpacingTypes;
  pr?: SpacingTypes;
  pl?: SpacingTypes;
  pt?: SpacingTypes;
  pb?: SpacingTypes;
  ph?: SpacingTypes;
  pv?: SpacingTypes;
} & FlexStyle;
