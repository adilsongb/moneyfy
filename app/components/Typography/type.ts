import type { PropsWithChildren }  from "@types";

export interface TextProps {
  color: string;
  variant: "p1";
}

export interface TypographyProps extends Partial<TextProps>, PropsWithChildren {}
