const initialState = {
    data: {
        name: '',
        surname: '',
        email: '',
        phone: '',
        city_id: '',
        delivery_id: '',
        address: '',
        home_office: '',
        description: '',
        payment_id: '',
    }
};
export const AddInfoReducer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'BuyerINfo':
            temp.data.name = action.data.name
            temp.data.surname = action.data.surname
            temp.data.email = action.data.email
            break;
        default:
            return temp;
    }
    return temp;
} 