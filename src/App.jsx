import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Box, Stack, Container } from '../lib/components';
import injectAirframe from '../lib/injectAirframe';
import 'sanitize.css';
import 'sanitize.css/typography.css';

const theme = {
  colors: {
    primary: 'rgb(0, 128, 255)',
    primaryLight: '#eaebec',
    textOnDark: '#ffffff',
    text: '#111111',
  },
  borderRadius: {
    small: '8px',
    pill: '999em',
  },
  breakpoints: {
    small: 768,
    medium: 800,
    large: 1024,
  },
  containerSizes: {
    tight: '25em',
    narrow: '40em',
  },
};

const MyBox = styled(Box)`
  ${({ theme }) => theme.media.small`
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
  `}
`;

const App = () => (
  <ThemeProvider theme={injectAirframe(theme)}>
    <Container size="narrow">
      <Box padding={2} minHeight="100vh">
        <Stack
          gap={1}
          alignX={{ default: 'center', medium: 'flex-end' }}
          direction={{ default: 'column', small: 'row' }}
          wrap
        >
          <Box
            padding={1}
            paddingVertical={0.5}
            paddingHorizontal={1}
            borderRadius="small"
            backgroundColor="primaryLight"
          >
            Hello
          </Box>
          <MyBox
            padding={{ default: 0.5, small: 1 }}
            borderRadius={{ default: 'pill', small: 'small' }}
            backgroundColor={{ default: 'primaryLight', medium: 'primary' }}
            color={{ default: '#111111', medium: 'textOnDark' }}
          >
            Hello
          </MyBox>
        </Stack>
      </Box>
    </Container>
  </ThemeProvider>
);

export default App;
