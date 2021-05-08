import * as actionTypes from './actionsTypes';
import axios from '../../axios-orders';

export const addIngredients = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENTS,
        ingredientName: name,
    };
}

export const removeIngredients = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENTS,
        ingredientName: name,
    };
}

export const setIngredients = (ingredients) => {

    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients,
    };

}

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED,
    };
}

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://react-burger-builder-6e91f-default-rtdb.firebaseio.com/ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data));
            })
            .catch(error => {
                dispatch(fetchIngredientsFailed());
            });
    }
}