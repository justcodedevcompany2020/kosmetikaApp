const initialState = {
    data: [],
    status: false,
    loading: true,
    error: ""
};
export const GetPaymentTypeReducer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'StartPaymentType':
            temp.data = []
            temp.status = false
            temp.loading = true
            temp.error = ''
            break;
        case 'SuccessPaymentType':
            temp.data = action.data
            temp.status = true
            temp.loading = false
            temp.error = ''
            break
        case 'ErrorPaymentType':
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