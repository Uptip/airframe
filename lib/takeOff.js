import { css } from 'styled-components';

const mediaQuery = (...query) => (...rules) =>
  css`
    @media ${css(...query)} {
      ${css(...rules)};
    }
  `;

const takeOff = theme => ({
  ...theme,

  spacing: input => `${input * 1}rem`,

  media: Object.keys(theme.breakpoints).reduce(
    (media, breakpoint) => ({
      ...media,
      [breakpoint]: mediaQuery`(min-width: ${
        theme.breakpoints?.[breakpoint] / 16
      }em)`,
    }),
    {},
  ),
});

export default takeOff;
