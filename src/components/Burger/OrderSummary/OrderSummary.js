import React from 'react';
import Aux from '../../../hoc/aux/aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li><span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}</li>
            );
        })

    return (
        <Aux>
            <h3>Order Details</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout? </p>
            <Button clicked={props.cancelPurchased} btnType="Danger">Cancel</Button>
            <Button clicked={props.continuedPurchase} btnType="Success">Continue</Button>
        </Aux>
    );
}

export default orderSummary;