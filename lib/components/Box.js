import styled from 'styled-components';
import { setProperty } from '../utils';

const Box = styled.div`
  ${({ theme, ...props }) =>
    [
      'display',

      'position',
      'top',
      'right',
      'bottom',
      'left',

      'padding',
      'paddingVertical',
      'paddingHorizontal',
      'paddingTop',
      'paddingRight',
      'paddingBottom',
      'paddingLeft',

      'marginAuto',

      'color',
      'backgroundColor',

      'flex',
      'flexGrow',
      'flexShrink',
      'flexBasis',
      'order',

      'width',
      'height',
      'minWidth',
      'minHeight',

      'overflow',
      'overflowX',
      'overflowY',

      'textDecoration',
      'fontWeight',
      'fontStyle',

      'boxShadow',
      'borderRadius',

      'gridArea',
      'gridColumnStart',
      'gridColumnEnd',
      'gridRowStart',
      'gridRowEnd',
    ]
      .filter(property => props?.[property] !== undefined)
      .map(property => {
        return setProperty({
          theme,
          property,
          value: props?.[property],
        });
      })}
`;

export default Box;
