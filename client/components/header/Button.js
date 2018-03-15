import React from 'react';
import { Link } from 'react-router';

const Button = ({ path, text, className}) => (
    <li>
        <Link to={path}>
            {text}
        </Link>
    </li>
);

export default Button;
