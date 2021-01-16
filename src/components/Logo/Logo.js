import React from 'react';
import LogoBurger from '../../assets/images/burger_logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={LogoBurger} />
    </div>
);

export default logo;