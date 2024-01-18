import Theme from "@theme";
import { css } from "styled-components";
import styled from "styled-components/native";

import type { TextProps } from "./type";

export const Text = styled.Text<TextProps>`
  ${({ variant, color }) => css`
    font-family: ${Theme.font[variant].family};
    font-size: ${Theme.font[variant].size};
    color: ${color};
  `}
`;
