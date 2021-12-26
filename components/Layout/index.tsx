import type { ReactNode } from 'react';

import { GlobalStyle, Main } from './style';

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyle />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
