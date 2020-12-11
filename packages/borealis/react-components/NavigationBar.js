import React, { Fragment } from 'react';
import { Meteor } from 'meteor/meteor';
import * as PropTypes from 'prop-types';
import { LetterAvatar } from './LetterAvatar';

export const LIGHT_VARIANT = 'light';

const DASHBOARD_URL = Meteor.settings.public.dashboardUrl;
const DASHBOARD_MENU_ENDPOINT = `${DASHBOARD_URL}/rest/menu-items`;

const SPECIAL_ITEMS = {
  ACCOUNT: 'Account',
  LOG_OUT: 'Log Out',
};
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
      mode: 'cors',
      headers: { Authorization: `Bearer ${dashboardToken}` },
      cache: 'default',
    };
    const username = Meteor._localStorage.getItem('navBarUsername');

    fetch(`${DASHBOARD_MENU_ENDPOINT}?app=${app}&username=${username}`, options)
      .then(result => result.json())
      .then(items => {
        this.setState({ items });
      });
  }
  // eslint-disable-next-line no-undef
  timeout = {};

  render() {
    const { variant, app = 'dashboard' } = this.props;
    const { items = [] } = this.state;

    const onMouseEnter = _id => {
      if (this.timeout[_id]) Meteor.clearTimeout(this.timeout[_id]);
      this.setState({
        ...this.state,
        [_id]: true,
      });
    };
    const onMouseLeave = _id => {
      this.timeout[_id] = Meteor.setTimeout(() => {
        this.setState({
          ...this.state,
          [_id]: false,
        });
      }, 100);
    };
    const mapSubitems = (subItems, _id) => (
      <nav
        onMouseEnter={() => onMouseEnter(_id)}
        onMouseLeave={() => onMouseLeave(_id)}
        className={`dropdown-list w-dropdown-list ${
          this.state[_id] ? 'w--open' : ''
        } `}
      >
        {subItems.map(subitem => (
          <div className="dropdown-link w-dropdown-link">
            <a
              key={subitem.label}
              href={subitem.actionLink}
              className="dropdown-link w-dropdown-link no-padding"
            >
              {subitem.label}
            </a>
            {subitem.alternativeLink ? (
              <a href={subitem.alternativeLink} style={{ marginLeft: 10 }}>
                <img
                  style={{ width: 30 }}
                  src={`/packages/mdg_borealis/icons/${
                    app === 'galaxy' ? 'dashboard' : 'galaxy'
                  }-logo.svg`}
                />
              </a>
            ) : (
              ''
            )}
          </div>
        ))}
      </nav>
    );

    return (
      <nav>
        <a href="/">
          {variant === LIGHT_VARIANT ? (
            <LogoLight className="logo" />
          ) : (
            <LogoDark className="logo" />
          )}
        </a>
        <div className="links">
          {items.map(({ _id, label, actionLink, items: itemSubitems }) => {
            if (label === SPECIAL_ITEMS.ACCOUNT) {
              return (
                <Fragment>
                  <LetterAvatar
                    size={40}
                    bgColor="white"
                    textColor="#595dff"
                    onMouseEnter={() => onMouseEnter(_id)}
                    onMouseLeave={() => onMouseLeave(_id)}
                  >
                    {this.props.loggedUser
                      ? this.props.loggedUser.username.toUpperCase()
                      : 'ND'}
                  </LetterAvatar>
                  {mapSubitems(itemSubitems, _id)}
                </Fragment>
              );
            }
            return (
              <div key={label} className="w-dropdown">
                <a
                  className={variant}
                  href={actionLink}
                  onMouseEnter={() => onMouseEnter(_id)}
                  onMouseLeave={() => onMouseLeave(_id)}
                >
                  {label}
                </a>
                {itemSubitems && mapSubitems(itemSubitems, _id)}
              </div>
            );
          })}
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
