export const updateObject = (oldState, updatedProperties) => {
    return {
        ...oldState,
        ...updatedProperties
    };
}

export default updateObject;