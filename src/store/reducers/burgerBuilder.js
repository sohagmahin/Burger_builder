import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    ingredients: null,
    totalPrice: 0,
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
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
                },
                totalPrice: state.totalPrice + INGREDIENTS_PRICE[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
                },
                totalPrice: state.totalPrice - INGREDIENTS_PRICE[action.ingredientName]
            };

        default:
            return state;
    }
}

export default reducer;