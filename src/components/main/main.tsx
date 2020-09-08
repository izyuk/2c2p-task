import React from 'react';
import {Link} from "react-router-dom";
import './main-page.less';

const Main = () => {
    return (
        <h3>
            You're at the main page but let's navigate to <Link to={'/products'}>products list →</Link>
        </h3>
    )
};

export default Main;
