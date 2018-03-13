const graphql = require('graphql');
const UserType = require('./types/user_type');
const AuthService = require('./../services/auth');

const {
    GraphQLObjectType,
    GraphQLString,
} = graphql;

const signupMutation = {
    type: UserType,
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    resolve: (parentValue, { email, password }, req) => 
        AuthService.signup({ email, password, req }),
};

const loginMutation = {
    type: UserType,
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    resolve: (parentValue, {email, password}, req) =>
        AuthService.login({email, password, req}),

};

const logoutMutation = {
    type: UserType,
    resolve: (parentValue, args, req) => 
        AuthService.logout(req),
};

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signup: signupMutation,
        logout: logoutMutation,
        login: loginMutation,
    },
});

module.exports = mutation;