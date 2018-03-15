import React from 'react';
import PropTypes from 'prop-types';
import Header from './header/Header';

const App = ({ children }) => (
    <div>
        <Header />
        {children}
    </div>
);

App.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]),
};

export default App;