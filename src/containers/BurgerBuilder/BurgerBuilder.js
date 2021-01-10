import React from 'react';
import Aux from '../../hoc/aux/aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENTS_PRICE = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 1.4,
    meat: 1.2,
}
class BurgerBuilder extends React.Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
    }

    updatePurchaseState(ingredients) {

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + INGREDIENTS_PRICE[type];
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice,
        });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice - INGREDIENTS_PRICE[type];
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice,
        });
        this.updatePurchaseState(updatedIngredients);
    }

    purchasingHandler = ()=>{
        this.setState({purchasing: true});
    }

    render() {
        let disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Modal show= {this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAddition={this.addIngredientHandler}
                    ingredientDistruction={this.removeIngredientHandler}
                    disabledInfo={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered = {this.purchasingHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;