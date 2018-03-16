import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';
import CurrentUserQuery from '../queries/CurrentUser';

const requireAuth = BaseComponent => {
    class RequireAuth extends Component {
        componentWillUpdate(nextProps) {
            const { loading, user } = nextProps.data;
            !loading && !user && hashHistory.push('/login')
        }

        render() {
            return <BaseComponent {...this.props} />
        }
    }

    return graphql(CurrentUserQuery)(RequireAuth);
};

export default requireAuth;