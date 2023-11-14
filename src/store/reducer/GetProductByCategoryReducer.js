const initialState = {
    data: [],
    status: false,
    loading: false,
    error: ""
};
export const GetProductByCategoryReducer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'StartGetProductByCategory':
            temp.data = []
            temp.status = false
            temp.loading = true
            temp.error = ''
            break;
        case 'SuccessGetProductByCateogy':
            temp.data = action.data
            temp.status = true
            temp.loading = false
            temp.error = ''
            break
        case 'ErrorGetProductByCategory':
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