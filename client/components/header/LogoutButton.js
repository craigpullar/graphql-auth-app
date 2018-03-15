import React from 'react';

const LogoutButton = ({ onClick }) => (
    <li>
        <a
            onClick={onClick}
        >
            Logout
        </a>
    </li>
);

export default LogoutButton;