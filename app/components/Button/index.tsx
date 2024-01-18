import Theme from "@theme";
import { Typography } from "../Typography";
import * as S from "./style";
import type { PropsWithChildren } from "app/types/general";

function Button({ children }: PropsWithChildren) {
  return (
    <S.Button>
      <Typography variant="p1" color={Theme.color.seconday}>
        {children}
      </Typography>
    </S.Button>
  )
}

export default Button;
