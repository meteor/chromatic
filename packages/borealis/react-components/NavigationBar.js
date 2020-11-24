import React from 'react';
import {useFetch} from "./useFetch";

export const LIGHT_VARIANT = "light";
NavigationBar = ({variant = LIGHT_VARIANT}) => {
    const response = useFetch('https://1jzxrj179.lp.gql.zone/graphql', {
        method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: '{ posts { title } }' }),
    });

    return <nav>
        {variant === LIGHT_VARIANT ? <LogoLight className="logo"/> : <LogoDark className="logo"/>}
        <div className='links'>
            <div data-delay="0" data-hover="1" className="w-dropdown">
                <a className={variant}>Applications</a>
                <nav className="dropdown-list w-dropdown-list w--open">
                    <a
                        href="{{pathFor 'install'}}"
                        className="dropdown-link w-dropdown-link"
                    >Install</a
                    >
                </nav>
            </div>
            <div data-delay="0" data-hover="1" className="w-dropdown">
                <a className={variant}>Applications</a>
                <nav className="dropdown-list w-dropdown-list w--open">
                    <a
                        href="{{pathFor 'install'}}"
                        className="dropdown-link w-dropdown-link"
                    >Install</a
                    >
                </nav>
            </div>
            <div data-delay="0" data-hover="1" className="w-dropdown">
                <a className={variant}>Applications</a>
                <nav className="dropdown-list w-dropdown-list w--open">
                    <a
                        href="{{pathFor 'install'}}"
                        className="dropdown-link w-dropdown-link"
                    >Install</a
                    >
                </nav>
            </div>
            <div data-delay="0" data-hover="1" className="w-dropdown">
                <a className={variant}>Applications</a>
                <nav className="dropdown-list w-dropdown-list w--open">
                    <a
                        href="{{pathFor 'install'}}"
                        className="dropdown-link w-dropdown-link"
                    >Install</a
                    >
                </nav>
            </div>
        </div>
    </nav>;
}
