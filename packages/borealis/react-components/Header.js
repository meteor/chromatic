import React from 'react';
import { useHeaderInfo } from './useHeaderInfo';

Header = ({ className, children }) => {
  const { showBack, title, label } = useHeaderInfo();
  return (
    <header className={`header ${className}`}>
      <div className="header-title">
        {showBack && (
          <a
            className="link-button secondary"
            onClick={() => {
              history.back();
            }}
          >
            <span className="icon-back" />
            {label}
          </a>
        )}

        <h1>{title}</h1>
      </div>
      <HeaderLogo className="absolute-background" />
      {children}
    </header>
  );
};
