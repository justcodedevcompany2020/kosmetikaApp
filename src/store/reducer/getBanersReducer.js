const initialState = {
    data: [],
    status: false,
    loading: false,
    error: "",
    firstData: []
};
export const GetBanersReducer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'StartGetBaners':
            temp.data = []
            temp.firstData = []
            temp.status = false
            temp.loading = true
            temp.error = ''
            break;
        case 'SuccessGetFirstBaners':
            temp.firstData = action.data
            temp.status = true
            temp.loading = false
            temp.error = ''
            break
        case 'SuccessGetBaners':
            temp.data = action.data
            temp.status = true
            temp.loading = false
            temp.error = ''
        case 'ErrorGetBaners':
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