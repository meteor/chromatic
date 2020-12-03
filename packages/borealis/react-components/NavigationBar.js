import React from 'react';
import * as PropTypes from 'prop-types';
import { LetterAvatar } from './LetterAvatar';

export const LIGHT_VARIANT = 'light';

const DASHBOARD_MENU_ENDPOINT = '/rest/menu-items';

class NavigationBarComponent extends React.Component {
  // eslint-disable-next-line no-undef
  state = {
    active: {},
    items: [],
  };
  componentDidMount() {
    const { dashboardToken, app = 'dashboard' } = this.props;
    const options = {
      method: 'GET',
      headers: { Authorization: `Bearer ${dashboardToken}` },
      cache: 'default',
    };

    fetch(`${DASHBOARD_MENU_ENDPOINT}?app=${app}`, options)
      .then(result => result.json())
      .then(items => {
        this.setState({ items });
      });
  }

  render() {
    const { variant } = this.props;
    const { items = [] } = this.state;

    return (
      <nav>
        {variant === LIGHT_VARIANT ? (
          <LogoLight className="logo" />
        ) : (
          <LogoDark className="logo" />
        )}
        <div className="links">
          {items.map(({ _id, label, actionLink, items: subItems }) => (
            <div key={label} className="w-dropdown">
              <a
                className={variant}
                href={actionLink}
                onMouseEnter={() =>
                  this.setState({
                    ...this.state,
                    _id: true,
                  })
                }
                onMouseLeave={() =>
                  this.setState({
                    ...this.state,
                    _id: false,
                  })
                }
              >
                {label}
              </a>
              {subItems && (
                <nav
                  className={`dropdown-list w-dropdown-list ${
                    this.state.active[_id] ? 'w--open' : ''
                  } `}
                >
                  {subItems.map(subitem => (
                    <a
                      key={subitem.label}
                      href={subitem.actionLink}
                      className="dropdown-link w-dropdown-link"
                    >
                      {subitem.label}
                    </a>
                  ))}
                </nav>
              )}
            </div>
          ))}
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
  // eslint-disable-next-line react/forbid-prop-types
  loggedUser: PropTypes.object,
  dashboardToken: PropTypes.string,
};

NavigationBarComponent.defaultProps = {
  variant: LIGHT_VARIANT,
  dashboardToken: null,
  loggedUser: { username: 'ND' },
};
NavigationBar = NavigationBarComponent;
