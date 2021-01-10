import React from 'react';
import Aux from '../../aux/aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';

class BurgerBuilder extends React.Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
               <BuildControls/>
            </Aux>
        )
    }
}

export default BurgerBuilder;