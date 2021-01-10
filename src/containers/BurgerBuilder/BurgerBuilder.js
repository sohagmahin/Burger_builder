import React from 'react';
import Aux from '../../aux/aux';
import Burger from '../../components/Burger/Burger';

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
                <div> <Burger ingredients={this.state.ingredients} /></div>
                <div>Burger controller</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;