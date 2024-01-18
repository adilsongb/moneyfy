import Typography from "@components/Typography";
import Theme from "@theme";
import type { PropsWithChildren } from "@types";

import * as S from "./style";

function Button({ children }: PropsWithChildren) {
  return (
    <S.Button activeOpacity={0.8}>
      <Typography variant="p1" color={Theme.color.seconday}>
        {children}
      </Typography>
    </S.Button>
  );
}

export default Button;
