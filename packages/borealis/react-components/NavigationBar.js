import React from 'react';
import * as PropTypes from 'prop-types';
import { LetterAvatar } from './LetterAvatar';

export const LIGHT_VARIANT = 'light';

class NavigationBarComponent extends React.Component {
  // eslint-disable-next-line no-undef
  state = {
    active: {},
  };
  render() {
    const { variant, apolloClient, gql } = this.props;
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
                this.state.active['0'] ? 'w--open' : ''
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
                this.state.active['1'] ? 'w--open' : ''
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
          <LetterAvatar
            size={40}
            bgColor="white"
            textColor="#595dff"
            onClick={() => {
              window.path = 'https://dashboard.meteor.com/profile';
            }}
          >
            {this.props.loggedUser
              ? this.props.loggedUser.username.toUpperCase()
              : 'ND'}
          </LetterAvatar>
        </div>
      </nav>
    );
  }
}

NavigationBarComponent.propTypes = {
  variant: PropTypes.string,
  apolloClient: PropTypes.any,
  gql: PropTypes.any,
};

NavigationBarComponent.defaultProps = { variant: LIGHT_VARIANT };
NavigationBar = NavigationBarComponent;
