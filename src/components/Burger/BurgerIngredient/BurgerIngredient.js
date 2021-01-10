import React from 'react';
import classes from './BurgerIngredient.module.css';
import Proptypes from 'prop-types';
import BurgerBuilder from '../../../containers/BurgerBuilder/BurgerBuilder';

const BurgerIngredient = (props) => {

    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}> </div>
            break;

        case ('bread-top'):
            ingredient = <div className={classes.BreadTop}>
                <div className={classes.Seeds1}></div>
                <div className={classes.Seeds2}></div>
            </div>
            break;

        case ('meat'):
            ingredient = <div className={classes.Meat}></div>
            break;

        case ('cheese'):
            ingredient = <div className={classes.Cheese}></div>
            break;

        case ('salad'):
            ingredient = <div className={classes.Salad}></div>
            break;

        case ('bacon'):
            ingredient = <div className={classes.Bacon}></div>
            break;

        default:
            ingredient = null;
    }
}

BurgerBuilder.prototype = {
    ingredient = Proptypes.string
}

export default BurgerIngredient;