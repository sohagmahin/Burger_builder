import * as actionTypes from '../actions/actionsTypes';
import updateObject from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 4.00,
    error: false,
}

const INGREDIENTS_PRICE = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 1.4,
    meat: 1.2,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENTS:
            const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
            const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
            const updatedState = {
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENTS_PRICE[action.ingredientName]
            };
            return updateObject(state, updatedState);

        case actionTypes.REMOVE_INGREDIENTS:
            const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
            const updatedIngs = updateObject(state.ingredients, updatedIng);
            const updatedSt = {
                ingredients: updatedIngs,
                totalPrice: state.totalPrice - INGREDIENTS_PRICE[action.ingredientName]
            };
            return updateObject(state, updatedSt);

        case actionTypes.SET_INGREDIENTS:
            return updateObject(state, {
                ingredients: action.ingredients,
                totalPrice: 4.00,
                error: false
            });

        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, { error: true });

        default:
            return state;
    }
}

export default reducer;