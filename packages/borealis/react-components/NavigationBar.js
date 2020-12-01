import React, { useState } from 'react';

export const LIGHT_VARIANT = 'light';
NavigationBar = ({ variant = LIGHT_VARIANT, apolloClient, gql }) => {
  const [active, setActive] = useState({});
  const query = gql`
    {
      menu {
        _id
        title
        actionUrl
        items {
          _id
          title
          actionUrl
        }
      }
    }
  `;
  const data = apolloClient.query({ fetchPolicy: 'cache-first', query });
  console.log(data);

  return (
    <nav>
      {variant === LIGHT_VARIANT ? (
        <LogoLight className="logo" />
      ) : (
        <LogoDark className="logo" />
      )}
      <div className="links">
        <div data-delay="0" data-hover="1" className="w-dropdown">
          <a className={variant}>Applications</a>
          <nav
            className={`dropdown-list w-dropdown-list ${
              active['0'] ? 'w--open' : ''
            } `}
          >
            <a
              href="{{pathFor 'install'}}"
              className="dropdown-link w-dropdown-link"
            >
              Install
            </a>
          </nav>
        </div>
        <div data-delay="0" data-hover="1" className="w-dropdown">
          <a className={variant}>Applications</a>
          <nav
            className={`dropdown-list w-dropdown-list ${
              active['1'] ? 'w--open' : ''
            } `}
          >
            <a
              href="{{pathFor 'install'}}"
              className="dropdown-link w-dropdown-link"
            >
              Install
            </a>
          </nav>
        </div>
      </div>
    </nav>
  );
};
