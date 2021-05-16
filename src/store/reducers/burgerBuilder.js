import * as actionTypes from '../actions/actionsTypes';
import updateObject from '../../shared/utility';

const initialState = {
    ingredients: null,
    totalPrice: 4.00,
    error: false,
    building: false,
}

const INGREDIENTS_PRICE = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 1.4,
    meat: 1.2,
}

const addIngredients = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENTS_PRICE[action.ingredientName],
        building: true,
    };
    return updateObject(state, updatedState);
}

const removeIngredients = (state, action) => {
    const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
    const updatedIngs = updateObject(state.ingredients, updatedIng);
    const updatedSt = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice - INGREDIENTS_PRICE[action.ingredientName],
        building: true,
    };
    return updateObject(state, updatedSt);
}

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: action.ingredients,
        totalPrice: 4.00,
        error: false,
        building: false,
    });
}

const fetchIngredientsFail = (state, action) => {
    return updateObject(state, { error: true });
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENTS: return addIngredients(state, action);
        case actionTypes.REMOVE_INGREDIENTS: return removeIngredients(state, action);
        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFail(state, action);
        default: return state;
    }
}

export default reducer;