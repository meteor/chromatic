import React from 'react';
import { Meteor } from 'meteor/meteor';
import * as PropTypes from 'prop-types';
import { LetterAvatar } from './LetterAvatar';
import keyBy from 'lodash.keyby';

export const LIGHT_VARIANT = 'light';

const DASHBOARD_URL = Meteor.settings.public.dashboardUrl;
const DASHBOARD_MENU_ENDPOINT = `${DASHBOARD_URL}/rest/menu-items`;

const SPECIAL_ITEMS = {
  ACCOUNT: 'Account',
  LOG_OUT: 'Log Out',
};
const ImageLogo = ({ app }) => (
  <img
    style={{ width: 30 }}
    src={`/packages/mdg_borealis/icons/${app}-logo.svg`}
  />
);
class NavigationBarComponent extends React.Component {
  constructor() {
    super();
    this.eventListener = () => {
      this.setState({ currentPath: window.location.pathname });
    };
    this.intervalId = Meteor.setInterval(this.eventListener, 1000);
  }
  // eslint-disable-next-line no-undef
  state = {
    active: {},
    items: [],
    currentPath: window.location.pathname,
  };

  // eslint-disable-next-line no-undef
  fetchItems = () => {
    const { dashboardToken, app, loggedUser = {} } = this.props;
    if (!dashboardToken) return;

    const options = {
      method: 'GET',
      mode: 'cors',
      headers: { Authorization: `Bearer ${dashboardToken}` },
      cache: 'default',
    };

    fetch(
      `${DASHBOARD_MENU_ENDPOINT}?app=${app}&username=${
        loggedUser ? loggedUser.username : 'null'
      }`,
      options
    )
      .then(result => result.json())
      .then(items => {
        this.setState({ items });
      });
  };

  componentDidMount() {
    const authToken = new URLSearchParams(window.location.search).get(
      'authToken'
    );
    if (authToken) {
      Meteor.loginWithToken(authToken);
    }

    this.fetchItems();
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.dashboardToken !== this.props.dashboardToken) {
      this.fetchItems();
    }
  }
  componentWillUnmount() {
    if (this.intervalId) {
      Meteor.clearInterval(this.intervalId);
    }
  }

  // eslint-disable-next-line no-undef
  timeout = {};

  render() {
    const { variant, app = 'dashboard', applicationItems = [] } = this.props;
    let { items = [] } = this.state;
    const { currentPath } = this.state;
    const match = currentPath.match(/\/app\/(.*)/);
    const currentApplication = match && match.length >= 2 ? match[1] : null;
    items = [...applicationItems, ...items].filter(Boolean);
    const applicationsNavItem = items.find(
      ({ label }) => label === 'Applications'
    );
    const applicationsMap = applicationsNavItem
      ? keyBy(applicationsNavItem.items, 'label')
      : {};
    const currentApplicationInfo =
      currentApplication && applicationsMap[currentApplication];

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
        {subItems.map(subitem => {
          const subSubItemOpenId = `${subitem.label}-thirdlevel`;
          return (
            <div
              className="dropdown-link w-dropdown-link"
              onMouseEnter={() => onMouseEnter(subSubItemOpenId)}
              onMouseLeave={() => onMouseLeave(subSubItemOpenId)}
            >
              <a
                key={subitem.label}
                href={subitem.actionLink || undefined}
                onClick={
                  subitem.label === SPECIAL_ITEMS.LOG_OUT
                    ? () => Meteor.logout()
                    : undefined
                }
                className="dropdown-link w-dropdown-link no-padding"
              >
                {subitem.label}
              </a>
              {subitem.items && subitem.items.length && (
                <ul
                  className={`${
                    this.state[subSubItemOpenId] ? 'ul--open' : ''
                  } `}
                >
                  {(subitem.items || []).map(subSubItem => (
                    <li key={`${subitem.label}-${subSubItem.label}`}>
                      <ImageLogo app={subSubItem.label.toLowerCase()} />
                      <a
                        href={subSubItem.actionLink || undefined}
                        className="dropdown-link w-dropdown-link"
                      >
                        {subSubItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {subitem.alternativeLink ? (
                <a href={subitem.alternativeLink} style={{ marginLeft: 10 }}>
                  <ImageLogo app={app} />
                </a>
              ) : (
                ''
              )}
            </div>
          );
        })}
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
          {currentApplication && currentApplicationInfo && (
            <div className="flex">
              <span style={{ marginRight: 16 }}>{currentApplication}</span>
              <PlanRibbon>{currentApplicationInfo.tier}</PlanRibbon>
            </div>
          )}
          {items.map(
            ({ _id, label, actionLink, onClick, items: itemSubitems }) => {
              if (label === SPECIAL_ITEMS.ACCOUNT) {
                return (
                  <div
                    key="accounts"
                    className="w-dropdown account-icon"
                    style={{ marginLeft: 0 }}
                  >
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
                  </div>
                );
              }
              return (
                <div key={label} className="w-dropdown">
                  <a
                    className={variant}
                    {...(onClick ? { onClick } : { href: actionLink })}
                    onMouseEnter={() => onMouseEnter(_id)}
                    onMouseLeave={() => onMouseLeave(_id)}
                  >
                    {label}
                  </a>
                  {itemSubitems && mapSubitems(itemSubitems, _id)}
                </div>
              );
            }
          )}
        </div>
        <span className="menu-button icon-menu" />
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
