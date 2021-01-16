import React from 'react';
import classes from './Navigations.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">CheckOut</NavigationItem>
    </ul>
);

export default navigationItems;