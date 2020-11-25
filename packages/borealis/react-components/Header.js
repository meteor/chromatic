import React from 'react';
import { LIGHT_VARIANT } from './NavigationBar';

Header = ({ variant = LIGHT_VARIANT, children, title = 'My Dev Account' }) => (
  <header className="header background-image">
    <h1>{title}</h1>
    <HeaderLogo className="absolute-background" />
    {children}
  </header>
);
