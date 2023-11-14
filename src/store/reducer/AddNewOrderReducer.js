const initialState = {
    data: [],
    status: false,
    loading: false,
    error: ""
};
export const AddNewOrderReducer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'StartNewOrder':
            temp.data = []
            temp.status = false
            temp.loading = true
            temp.error = ''
            break;
        case 'SuccessNewOrder':
            temp.data = action.data
            temp.status = true
            temp.loading = false
            temp.error = ''
            break
        case 'ErrorNewOrder':
            temp.data = ''
            temp.status = false
            temp.loading = false
            temp.error = 'رمز خاطئ'
            break
        case 'ClearOrderStatus':
            temp.data = ''
            temp.status = false
            temp.loading = false
            temp.error = ''
            break

        default:
            return temp;
    }
    return temp;
} 