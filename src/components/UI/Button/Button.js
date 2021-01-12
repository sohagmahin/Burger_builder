import React from 'react';
import classes from './Button.module.css';

const button = (props) => {
    <button className={[classes.Button, classes[btnType]].join(' ')}>
        {props.children}
    </button>
}

export default button;