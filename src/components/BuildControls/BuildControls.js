import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Bacon', type: 'bacon' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Meat', type: 'meat' },
]

const buildControls = (props) => (
        <div className={classes.BuildControls}>
                <div> Current Price : <strong>{props.price.toFixed(2)}</strong></div>
                {controls.map(cltr => (
                        <BuildControl
                                key={cltr.label}
                                label={cltr.label}
                                type={cltr.type}
                                added={() => props.ingredientAddition(cltr.type)}
                                removed={() => props.ingredientDistruction(cltr.type)}
                                disabled={props.disabledInfo[cltr.type]}
                        />
                ))}

                <button
                        className={classes.OrderButton}
                        disabled={!props.purchasable}
                        onClick={() => props.ordered()}
                >ORDER NOW</button>
        </div>
);

export default buildControls;
