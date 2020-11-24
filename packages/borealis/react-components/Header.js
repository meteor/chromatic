import React from 'react';
import { LIGHT_VARIANT } from './NavigationBar';

Header = ({ variant = LIGHT_VARIANT, children }) => (
  <header className="header background-image">
    <HeaderLogo className="absolute-background" />
    {children}
  </header>
);
