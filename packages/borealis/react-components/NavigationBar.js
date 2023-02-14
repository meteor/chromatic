import React from 'react';
import { Meteor } from 'meteor/meteor';
import * as PropTypes from 'prop-types';
import { LetterAvatar } from './LetterAvatar';
import keyBy from 'lodash.keyby';
import classNames from 'classnames';

export const LIGHT_VARIANT = 'light';

const DASHBOARD_URL = Meteor.settings.public.dashboardUrl;
const DASHBOARD_MENU_ENDPOINT = `${DASHBOARD_URL}/rest/menu-items`;

const SPECIAL_ITEMS = {
  ACCOUNT: 'Account',
  LOG_OUT: 'Log Out',
  REGIONS: 'Regions',
};

const Link = ({ RouterComponent, href, children, ...props }) => {
  if (RouterComponent && href) {
    let to = href;
    if (href.startsWith('http')) {
      const url = new URL(href);
      const currentPath = new URL(window.location.href);

      if (url.origin === currentPath.origin) {
        to = url.toString().substring(url.origin.length);
      } else {
        return (
          <a href={href} {...props}>
            {children}
          </a>
        );
      }
    }
    return (
      <RouterComponent to={to} {...props}>
        {children}{' '}
      </RouterComponent>
    );
  }
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
};

const ImageLogo = ({ app }) => (
  <img
    style={{ width: 30 }}
    src={`/packages/mdg_borealis/icons/${app}-logo.svg`}
  />
);
const ArrowIcon = ({ direction = 'right', ...props }) => (
  <img
    {...props}
    style={{ width: 13, marginRight: 8, marginLeft: 8, cursor: 'pointer' }}
    src={`/packages/mdg_borealis/icons/svg/arrow-${direction}.svg`}
  />
);

class NavigationBarComponent extends React.Component {
  constructor() {
    super();
    this.eventListener = () => {
      if (this.state.currentPath === window.location.pathname) {
        return;
      }
      this.setState({ currentPath: window.location.pathname });
    };
    this.urlIntervalId = Meteor.setInterval(this.eventListener, 1000);
    this.pollingIntervalId = Meteor.setInterval(() => this.fetchItems(), 5000);
    this.dropdownSecondary = React.createRef();
    this.dropdownSecondary.current = [];
  }
  // eslint-disable-next-line no-undef
  state = {
    active: {},
    items: [],
    currentPath: window.location.pathname,
    showMobileMenu: false,
    mainLabel: null,
  };

  // eslint-disable-next-line no-undef
  fetchItems = () => {
    const { dashboardToken, app, loggedUser = {} } = this.props;
    if (!dashboardToken) {
      return;
    }

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
        if (JSON.stringify(items) === JSON.stringify(this.state.items)) {
          return;
        }
        this.setState({ items });
      })
      .catch(e => console.error('Error fetching NavigationBar data', e));
  };

  componentDidMount() {
    this.fetchItems();
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.dashboardToken !== this.props.dashboardToken) {
      this.fetchItems();
    }
  }
  componentWillUnmount() {
    if (this.urlIntervalId) {
      Meteor.clearInterval(this.urlIntervalId);
    }
    if (this.pollingIntervalId) {
      Meteor.clearInterval(this.pollingIntervalId);
    }
  }

  toggleMobileMenu = () => {
    this.setState({ showMobileMenu: !this.state.showMobileMenu });
  };

  toggleNavMobileMenu = () => {
    this.setState({ mainLabel: null });
  };

  toggleDropdownSecondary = (i) => {
    this.dropdownSecondary.current[i].classList.toggle('ul--open');
  };

  // eslint-disable-next-line no-undef
  timeout = {};

  render() {
    const {
      variant,
      app = 'dashboard',
      applicationItems = [],
      RouterComponent = 'a',
    } = this.props;
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

    const toggleState = (_id, subitem) => {
      this.setState({
        active: {
          [_id]: !this.state.active[_id],
          [subitem]: this.state.active[subitem],
        },
      });
    };

    const renderSubItems = ({
      subItems,
      _id,
      Decorator = null,
      mobile,
      mobileOnClick,
    }) => (
      <nav
        className={
          mobile
            ? 'mobile-menu-subitem'
            : `dropdown-list w-dropdown-list`
        }
      >
        {subItems.map((subitem, i) => {
          const subSubItemOpenId = `${subitem.label}-thirdlevel`;
          const logoutFunction = () => {
            Meteor.logout();
            window.location.href = 'https://cloud.meteor.com';
          };
          const logoutOnClick = subitem.label === SPECIAL_ITEMS.LOG_OUT
              ? logoutFunction
              : undefined;
          return (
            <div
              className={mobile ? 'mobile-menu-item' : ''}
              style={{ width: '100%' }}
              key={subSubItemOpenId}
            >
              <div
                className={
                  mobile
                    ? ''
                    : classNames(
                        {
                          'expandable-dropdown':
                            subitem.items && subitem.items.length,
                        },
                        'dropdown-link',
                        'w-dropdown-link'
                      )
                }
                onClick={e => {
                  if (subitem.items && subitem.items.length) {
                    e.stopPropagation();
                  }
                  if (mobile) {
                    mobileOnClick({ close: true })();
                  }
                }}
              >
                <Link
                  key={subitem.label}
                  href={subitem.actionLink || undefined}
                  RouterComponent={RouterComponent}
                  onClick={
                    subitem.onClick ? subitem.onClick : logoutOnClick
                  }
                  style={mobile ? { color: '#8d91a3' } : {}}
                  className={
                    mobile ? '' : 'dropdown-link w-dropdown-link no-padding'
                  }
                >
                  {Decorator ? (
                    <Decorator
                      item={subitem}
                      style={{ marginRight: 5, float: 'left' }}
                    />
                  ) : null}
                  {subitem.label}
                </Link>
                {subitem.items && subitem.items.length && (
                  <ArrowIcon
                    direction='down'
                    onClick={(e) => {
                      this.toggleDropdownSecondary(i);
                      e.currentTarget.classList.toggle('arrow-icon--active');
                    }}
                  />
                )}
                {subitem.alternativeLink ? (
                  <Link
                    href={subitem.alternativeLink}
                    style={{ marginLeft: 10 }}
                    RouterComponent={RouterComponent}
                  >
                    <ImageLogo app={app} />
                  </Link>
                ) : (
                  ''
                )}
              </div>
              {subitem.items && subitem.items.length && (
                <div className={mobile ? '' : 'third-level-items'}>
                  <ul
                    ref={el => this.dropdownSecondary.current[i] = el}
                  >
                    {(subitem.items || []).map(subSubItem => (
                      <li key={`${subitem.label}-${subSubItem.label}`}>
                        <ImageLogo app={subSubItem.label.toLowerCase()} />
                        <Link
                          href={subSubItem.actionLink || undefined}
                          RouterComponent={RouterComponent}
                          className={
                            mobile ? '' : 'dropdown-link w-dropdown-link'
                          }
                        >
                          {subSubItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </nav>
    );

    const NavItems = ({ mobile }) => (
      <div className={mobile ? 'mobile-menu-items' : 'links'}>
        {currentApplication && currentApplicationInfo && (
          <div className={mobile ? 'mobile-menu-item' : 'flex'}>
            <span style={{ marginRight: 16 }}>{currentApplication}</span>
            <Link href={`${currentApplicationInfo.dashboardLink || currentApplicationInfo.actionLink}/upgrade`}>
              <PlanRibbon>
                {currentApplicationInfo.tier}
              </PlanRibbon>
            </Link>
          </div>
        )}
        {items.map(
          ({ _id, label, actionLink, onClick, items: itemSubitems }) => {
            if (
              mobile &&
              this.state.mainLabel &&
              this.state.mainLabel !== label
            ) {
              return null;
            }
            const showLabelSubItems = !mobile || this.state.mainLabel === label;

            const mobileOnClick = ({ close } = {}) =>
              mobile
                ? () => {
                    if (close) {
                      this.toggleMobileMenu();
                    } else {
                      this.setState({ mainLabel: label });
                    }
                  }
                : () => {};
            if (label === SPECIAL_ITEMS.ACCOUNT) {
              return (
                <div
                  key="accounts"
                  className={
                    mobile
                      ? 'mobile-menu-item mobile-menu-item-profile'
                      : 'w-dropdown account-icon'
                  }
                  onClick={mobileOnClick()}
                >
                  {(!mobile || this.state.mainLabel !== label) && (
                    <div className="avatar-wrapper">
                      <LetterAvatar
                        size={40}
                        bgColor={mobile ? '#eee' : 'white'}
                        textColor="#4241A8"
                      >
                        {this.props.loggedUser
                          ? this.props.loggedUser.username.toUpperCase()
                          : 'ND'}
                      </LetterAvatar>
                    </div>
                  )}
                  {showLabelSubItems &&
                    renderSubItems({
                      subItems: itemSubitems,
                      _id,
                      mobile,
                      mobileOnClick,
                    })}
                </div>
              );
            }

            if (label === SPECIAL_ITEMS.REGIONS) {
              const currentRegion = itemSubitems.find(
                ({ actionLink: regionActionLink }) =>
                  new URL(regionActionLink).hostname ===
                  new URL(window.location.href).hostname
              );
              const Decorator = ({ item: { label: regionLabel }, style }) => (
                <img
                  style={style}
                  src={`/packages/mdg_borealis/icons/countries/${regionLabel}.svg`}
                />
              );

              return (
                <div
                  key={label}
                  className={mobile ? 'mobile-menu-item' : 'w-dropdown'}
                  onClick={mobileOnClick({ close: true })}
                >
                  <Link
                    RouterComponent={RouterComponent}
                    className={variant}
                    {...(onClick ? { onClick } : { href: actionLink })}
                  >
                    {currentRegion.label}
                    <img
                      style={{ height: 25, float: 'right', marginLeft: 5 }}
                      src={`/packages/mdg_borealis/icons/countries/${currentRegion.label}.svg`}
                    />
                  </Link>
                  {(showLabelSubItems &&
                    itemSubitems &&
                    itemSubitems.length &&
                    renderSubItems({
                      subItems: itemSubitems,
                      _id,
                      Decorator,
                      mobile,
                      mobileOnClick,
                    })) ||
                    null}
                </div>
              );
            }

            return (
              <div
                key={label}
                className={mobile ? 'mobile-menu-item' : 'w-dropdown'}
                onClick={mobileOnClick({ close: true })}
              >
                <Link
                  RouterComponent={RouterComponent}
                  className={variant}
                  {...(onClick ? { onClick } : { href: actionLink })}
                >
                  {label}
                </Link>
                {(showLabelSubItems &&
                  itemSubitems &&
                  itemSubitems.length &&
                  renderSubItems({
                    subItems: itemSubitems,
                    _id,
                    mobile,
                    mobileOnClick,
                  })) ||
                  null}
              </div>
            );
          }
        )}
      </div>
    );

    return (
      <nav className={this.props.className}>
        <Link href="/" RouterComponent={RouterComponent}>
          {variant === LIGHT_VARIANT ? (
            <LogoLight className="logo" />
          ) : (
            <LogoDark className="logo" />
          )}
        </Link>
        <NavItems />
        <span
          className="menu-button icon-menu"
          onClick={this.toggleMobileMenu}
        />
        {this.state.showMobileMenu && (
          <div className="mobile-menu">
            <div className="mobile-menu-title" onClick={this.toggleMobileMenu}>
              <LogoDark />
              <span className="icon-close" />
            </div>
            {this.state.mainLabel && (
              <div
                className="mobile-menu-close-nav"
                onClick={this.toggleNavMobileMenu}
              >
                <span className="icon-arrow-up" />
              </div>
            )}
            <NavItems mobile />
          </div>
        )}
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
