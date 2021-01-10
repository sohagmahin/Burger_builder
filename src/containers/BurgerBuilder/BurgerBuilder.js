import React from 'react';
import Aux from '../../aux/aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends React.Component {
    render() {
        return (
            <Aux>
                <div> <Burger/></div>
                <div>Burger controller</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;