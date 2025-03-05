import type { BaseElementStyleProps } from "@/types/general";
import type { ScrollViewProps } from "react-native";

export type ScreenViewProps = ScrollViewProps &
  BaseElementStyleProps & {
    safeArea?: boolean;
  };
