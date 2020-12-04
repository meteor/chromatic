import React from 'react';
import { LIGHT_VARIANT } from './NavigationBar';
import { useHeaderInfo } from './useHeaderInfo';

Header = ({ variant = LIGHT_VARIANT, children }) => {
  const { showBack, title } = useHeaderInfo();
  return (
    <header className="header background-image">
      <div className="header-title">
        {showBack && (
          <a
            className="link-button secondary"
            onClick={() => {
              history.back();
            }}
          >
            <span className="icon-back" />
            Back
          </a>
        )}

        <h1>{title || 'My Dev Account'}</h1>
      </div>
      <HeaderLogo className="absolute-background" />
      {children}
    </header>
  );
};
