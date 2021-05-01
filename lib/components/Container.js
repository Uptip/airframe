import styled, { css } from 'styled-components';
import { entries } from '../utils';
import Box from './Box';

const Container = styled(Box).attrs(({ paddingHorizontal, marginAuto }) => ({
  paddingHorizontal: paddingHorizontal !== undefined ? paddingHorizontal : 1,
  marginAuto: marginAuto !== undefined ? marginAuto : true,
}))`
  width: 100%;

  ${({ theme }) =>
    entries(theme.containerSizes).map(
      ([name, value]) => css`
        ${({ size }) =>
          size === name &&
          css`
            max-width: ${value};
          `}
      `,
    )}
`;

export default Container;
