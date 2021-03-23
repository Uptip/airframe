import { css } from 'styled-components';
import isPlainObject from 'lodash.isplainobject';

export const upperFirst = (input = '') =>
  input.charAt(0).toUpperCase() + input.slice(1);

export const entries = input =>
  Object.keys(input).map(key => [key, input[key]]);

const formatProperty = ({ property, prefix = '' }) =>
  `${prefix}${Boolean(prefix) ? '-' : ''}${property}`
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

const setPropertyBreakpoint = ({ theme, value, property, prefix }) => {
  switch (`${prefix}${property}`) {
    case 'marginAuto':
      if (!Boolean(value)) {
        return null;
      }
      return css`
        margin-left: auto;
        margin-right: auto;
      `;

    case 'paddingVertical':
      return css`
        padding-top: ${theme.spacing(value)};
        padding-bottom: ${theme.spacing(value)};
      `;

    case 'color':
    case 'backgroundColor':
      return css`
        ${formatProperty({ prefix, property })}: ${theme.colors?.[value]};
      `;

    case 'paddingHorizontal':
      return css`
        padding-left: ${theme.spacing(value)};
        padding-right: ${theme.spacing(value)};
      `;

    case 'borderRadius':
    case 'borderTopLeftRadius':
    case 'borderTopRightRadius':
    case 'borderBottomLeftRadius':
    case 'borderBottomRightRadius':
      return css`
        ${formatProperty({ prefix, property })}: ${theme.borderRadius?.[value]};
      `;

    case 'padding':
    case 'paddingTop':
    case 'paddingRight':
    case 'paddingBottom':
    case 'paddingLeft':
    case 'gridGap':
    case 'gridRowGap':
    case 'gridColumnGap':
      return css`
        ${formatProperty({ prefix, property })}: ${theme.spacing(value)};
      `;

    case 'display':
    case 'position':
    case 'top':
    case 'right':
    case 'bottom':
    case 'left':
    case 'width':
    case 'height':
    case 'minWidth':
    case 'minHeight':
    case 'overflow':
    case 'overflowX':
    case 'overflowY':
    case 'textDecoration':
    case 'fontWeight':
    case 'fontStyle':
    case 'flex':
    case 'flexDirection':
    case 'flexGrow':
    case 'flexShrink':
    case 'flexBasis':
    case 'order':
    case 'gridColumn':
    case 'gridRow':
    case 'gridArea':
    case 'gridAutoFlow':
    case 'gridAutoRows':
    case 'gridAutoColumns':
    case 'gridTemplateRows':
    case 'gridTemplateColumns':
    case 'gridTemplateAreas':
      return css`
        ${formatProperty({ prefix, property })}: ${value};
      `;

    default:
      return null;
  }
};

export const setProperty = ({ theme, value, property, prefix = '' }) => {
  if (!isPlainObject(value)) {
    return setPropertyBreakpoint({
      theme,
      value,
      property,
      prefix,
    });
  }

  return css`
    ${setPropertyBreakpoint({
      theme,
      value: value?.default,
      property,
      prefix,
    })}

    ${Object.keys(value)
      .filter(
        breakpoint =>
          breakpoint !== 'default' && Boolean(theme.media?.[breakpoint]),
      )
      .map(
        breakpoint => theme.media[breakpoint]`
        ${setPropertyBreakpoint({
          theme,
          value: value?.[breakpoint],
          property,
          prefix,
        })}
        `,
      )}
  `;
};
