import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';
import AuthForm from './AuthForm';
import LoginMutation from '../../mutations/Login';
import CurrentUserQuery from '../../queries/CurrentUser';

class LoginForm extends Component {
    constructor() {
        super();

        this.state = {
            errors: [],
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillUpdate({ data: { user } }) {
        user && hashHistory.push('/dashboard');
    }

    onSubmit({ email, password }) {
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{ query: CurrentUserQuery }]
        })
        .catch(({ graphQLErrors }) => {
            const getMessage = ({ message }) => message;
            const errors = graphQLErrors.map(getMessage);
            this.setState({ errors });
        });
    }

    render() {
        return (
            <div className="container">
                <h2>Login</h2>
                <AuthForm
                    errors={this.state.errors}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

export default 
graphql(CurrentUserQuery)
    (graphql(LoginMutation)(LoginForm));