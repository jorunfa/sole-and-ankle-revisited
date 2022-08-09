import React from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';
import { COLORS, QUERIES } from '../../constants';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  :root {
    --spacing: 16px;
    --spacing-vertical: 48px;
    --color-white: ${COLORS.white};
    --color-gray-100: ${COLORS.gray[100]};
    --color-gray-300: ${COLORS.gray[300]};
    --color-gray-500: ${COLORS.gray[500]};
    --color-gray-700: ${COLORS.gray[700]};
    --color-gray-700-alpha-800: hsl(${COLORS.gray[700].replace("hsl(", "").replace(")", "")} / 0.8);
    --color-gray-900: ${COLORS.gray[900]};
    --color-primary: ${COLORS.primary};
    --color-secondary: ${COLORS.secondary};

    @media ${QUERIES.tabletAndUp} {
      --spacing: 32px;
    }

    @media ${QUERIES.desktopAndUp} {
      --spacing-vertical: 64px;
    }
  }
`;

const Main = styled.main`
  padding: var(--spacing-vertical) var(--spacing);
`;

export default App;
