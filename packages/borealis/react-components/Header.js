import React from 'react';
import { LIGHT_VARIANT } from './NavigationBar';
import { useHeaderInfo } from './useHeaderInfo';

Header = ({ variant = LIGHT_VARIANT, children, title = 'My Dev Account' }) => {
  const { showBack } = useHeaderInfo();
  return (
    <header className="header background-image">
      <div className="header-title">
        {showBack && (
          <a className="link-button">
            <span className="icon-back" />
            Back
          </a>
        )}

        <h1>{title}</h1>
      </div>
      <HeaderLogo className="absolute-background" />
      {children}
    </header>
  );
};
