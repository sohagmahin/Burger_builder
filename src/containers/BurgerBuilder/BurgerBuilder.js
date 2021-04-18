import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import LoadingSpinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import spinner from '../../components/UI/Spinner/Spinner';
import * as actionTypes from '../../store/actions';

import { connect } from 'react-redux';
class BurgerBuilder extends React.Component {

    state = {
        ingredients: null,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: null,
    }

    updatePurchaseState(ingredients) {

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        return sum > 0;
    }

    purchasingHandler = () => {
        this.setState({ purchasing: true });
    }

    purchasingCancleHandler = () => {
        this.setState({ purchasing: false });
    }
    purchasedContinue = () => {
        // alert('Your purchase complete!');
        // this.setState({ loading: true });
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: 'Sohag Mahin',
        //         address: {
        //             street: 'TestStreet 1',
        //             zipCode: '5000',
        //             country: 'Bangladesh'
        //         },
        //         email: 'test@gmail.com'
        //     },
        //     deliveryMethod: 'fastest'
        // }
        // axios.post('/orders.json', order)
        //     .then(response => {
        //         console.log(response);
        //         this.setState({ loading: false, purchasing: false });
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         this.setState({ loading: false, purchasing: false });
        //     });

        const queryParams = [];
        for (let i in this.props.ings) {
            queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('price=' + this.props.price);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        })
    }


    componentDidMount() {
        axios.get('https://react-burger-builder-6e91f-default-rtdb.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({ ingredients: response.data });
            })
            .catch(error => {
                this.setState({ error: true });
            });
    }

    render() {
        let disabledInfo = {
            ...this.props.ings
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;

        let burger = this.state.error ? <p> Ingredients can't loaded!</p> : <LoadingSpinner />;
        if (this.props.ings) {
            burger = (<Aux>
                <Burger ingredients={this.props.ings} />
                <BuildControls
                    ingredientAddition={this.props.onIngredientAdded}
                    ingredientDistruction={this.props.onIngredientRemoved}
                    disabledInfo={disabledInfo}
                    price={this.props.price}
                    purchasable={this.updatePurchaseState(this.props.ings)}
                    ordered={this.purchasingHandler}
                />
            </Aux>
            );

            orderSummary = (<OrderSummary
                ingredients={this.props.ings}
                price={this.props.price}
                cancelPurchased={this.purchasingCancleHandler}
                continuedPurchase={this.purchasedContinue}
            />);
        }

        if (this.state.loading) {
            orderSummary = <LoadingSpinner />;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchasingCancleHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingsName) => dispatch({ type: actionTypes.ADD_INGREDIENTS, ingredientName: ingsName }),
        onIngredientRemoved: (ingsName) => dispatch({ type: actionTypes.REMOVE_INGREDIENTS, ingredientName: ingsName })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));