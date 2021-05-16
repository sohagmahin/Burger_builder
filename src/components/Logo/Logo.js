import React from 'react';
import LogoBurger from '../../assets/images/burger_logo.png';
import classes from './Logo.module.css';

const logo = () => (
    <div className={classes.Logo}>
        <img src={LogoBurger} alt="burger logo" />
    </div>
);

export default logo;