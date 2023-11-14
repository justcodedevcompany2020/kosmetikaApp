const initialState = {
    data: [],
    status: false,
    loading: false,
    error: ""
};
export const ValidOrderReducer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'StartValidOrder':
            temp.data = []
            temp.status = false
            temp.loading = true
            temp.error = ''
            break;
        case 'SuccessValidOrder':
            temp.data = action.data
            temp.status = true
            temp.loading = false
            temp.error = ''
            break
        case 'ErrorValidOrder':
            temp.data = ''
            temp.status = false
            temp.loading = false
            temp.error = 'error'
            break
        case 'ClearValidOrder':
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