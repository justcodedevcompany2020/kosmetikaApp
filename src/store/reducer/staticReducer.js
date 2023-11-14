const initialState = {
    token: ''
};
export const StaticReducer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'SetToken':
            temp.token = action.data
            break;
        default:
            return temp;
    }
    return temp;
} 