const initialState = {
    data: [],
    status: false,
    loading: false,
    error: ""
};
export const AutReducer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'StartLogin':
            temp.data = []
            temp.status = false
            temp.loading = true
            temp.error = ''
            break;
        case 'SuccessLogin':
            temp.data = action.data
            temp.status = true
            temp.loading = false
            temp.error = ''
            break
        case 'ErrorLogin':
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