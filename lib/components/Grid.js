import styled from 'styled-components';
import { setProperty } from '../utils';
import Box from './Box';

const Grid = styled(Box)`
  display: grid;

  ${({ theme, ...props }) =>
    [
      'area',
      'autoColumns',
      'autoFlow',
      'autoRows',
      'column',
      'columnGap',
      'gap',
      'row',
      'rowGap',
      'templateAreas',
      'templateColumns',
      'templateRows',
    ]
      .filter(property => props?.[property] !== undefined)
      .map(property =>
        setProperty({
          theme,
          property,
          value: props?.[property],
          prefix: 'grid',
        }),
      )}
`;

export default Grid;
