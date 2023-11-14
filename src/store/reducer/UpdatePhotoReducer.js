const initialState = {
    status: false,
    loading: false,
    error: ""
};
export const UpdatePhotoReducer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'StartUpdateUserAvatar':
            temp.data = []
            temp.status = false
            temp.loading = true
            temp.error = ''
            break;
        case 'SuccessUpdateUserAvatar':
            temp.data = action.data
            temp.status = true
            temp.loading = false
            temp.error = ''
            break
        case 'ErrorUpdateUserAvatar':
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