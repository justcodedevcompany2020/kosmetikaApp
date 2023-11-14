const initialState = {
    data: [],
    status: false,
    loading: true,
    error: ""
};
export const GetDeliveryReducer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'StartDelivery':
            temp.data = []
            temp.status = false
            temp.loading = true
            temp.error = ''
            break;
        case 'SuccessDelivery':
            temp.data = action.data
            temp.status = true
            temp.loading = false
            temp.error = ''
            break
        case 'ErrorDelivery':
            temp.data = ''
            temp.status = false
            temp.loading = false
            temp.error = 'error'
            break
        default:
            return temp;
    }
    return temp;
} 