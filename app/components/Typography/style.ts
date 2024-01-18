import styled from 'styled-components/native';
import Theme from '@theme';
import type { TextProps } from './type';
import { css } from 'styled-components';

export const Text = styled.Text<TextProps>`
  ${({ variant, color }) => css`
    font-family: ${Theme.font[variant].family};
    font-size: ${Theme.font[variant].size};
    color: ${color};
  `}
`;
