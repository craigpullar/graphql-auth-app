import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import CurrentUserQuery from '../../queries/CurrentUser';
import LogoutMutation from '../../mutations/Logout';
import Button from './Button';
import LogoutButton from './LogoutButton';

const Header = ({ data: { loading, user }, mutate }) => {
    const loadingJSX = <div />;
    const signInButton = (
        <div>
            <Button
                path="/signup"
                text="Signup"
            />
            <Button
                path="/login"
                text="Login"
            />
        </div>
    );
  
    const buttonJSX = (() => {
        const logoutOnClick = () => {
            mutate({
                refetchQueries: [
                    { query: CurrentUserQuery }
                ]
            })
        };
        if (user) return <LogoutButton onClick={logoutOnClick} />;
        else return signInButton;
    })();

    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo left">
                    Home
                </Link>
                <ul className="right">
                    {loading ? loadingJSX : buttonJSX }
                </ul>
            </div>
        </nav>
    
    )
};

export default 
    graphql(LogoutMutation)(
        graphql(CurrentUserQuery)(Header)
    );
