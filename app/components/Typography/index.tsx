import * as S from "./style";
import type { TypographyProps } from "./type";

export function Typography({ children, variant="p1", color="#000" }: TypographyProps) {
  return (
    <>
      <S.Text variant={variant} color={color}>
        {children}
      </S.Text>
    </>
  )
}
