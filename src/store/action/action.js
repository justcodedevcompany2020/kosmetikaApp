import AsyncStorage from "@react-native-async-storage/async-storage";
import { ErrorConfirmCode, ErrorDelivery, ErrorGetBaners, ErrorGetBasket, ErrorGetCityes, ErrorGetFavorites, ErrorGetProductByCategory, ErrorGetProducts, ErrorGetSearchHistory, ErrorGetSinglChat, ErrorGetSinglPorduct, ErrorGetUser, ErrorGetstoryes, ErrorLogin, ErrorNewOrder, ErrorPaymentType, ErrorUpdateUser, ErrorUpdateUserAvatar, ErrorValidOrder } from "./errorAction";
import { StartConfrimCode, StartDelivery, StartGetBaners, StartGetBasket, StartGetCityes, StartGetFavorites, StartGetProducets, StartGetProductByCategory, StartGetSearchHistory, StartGetSinglChat, StartGetSinglProduct, StartGetStoryes, StartGetUser, StartLogin, StartNewOrder, StartPaymentType, StartUpdateProfil, StartUpdateUserAvatar, StartValidOrder } from "./startAction";
import { SetToken, SuccessConfirmCode, SuccessDelivery, SuccessGetBaners, SuccessGetBasket, SuccessGetCityes, SuccessGetFavorites, SuccessGetFirstBaners, SuccessGetProducets, SuccessGetProductByCateogy, SuccessGetSearchHistory, SuccessGetSinglCaht, SuccessGetSinglProduct, SuccessGetStoryes, SuccessGetUser, SuccessLogin, SuccessNewOrder, SuccessPaymentType, SuccessUpdateUser, SuccessUpdateUserAvatar, SuccessValidOrder } from "./successAction";

let api = 'https://basrabackend.justcode.am/api/app'
let api2 = 'https://basrabackend.justcode.am/api'

export const LoginAction = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartLogin())
        fetch(`${api}/login`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessLogin(r))
                }
                else {
                    dispatch(ErrorLogin())
                }
            })
            .catch((error) => {
                dispatch(ErrorLogin())
            });
    }
}

export const ConfrimCode = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartConfrimCode())
        fetch(`${api}/confirm_login`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    AsyncStorage.setItem('token', r.token)
                    dispatch(SetToken(r.token))
                    dispatch(SuccessConfirmCode(r))
                }
                else {
                    dispatch(ErrorConfirmCode())
                }
            })
            .catch((error) => {
                dispatch(ErrorConfirmCode())
            });
    }
}

export const GetAuthUser = (token) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    return (dispatch) => {
        dispatch(StartGetUser())
        fetch(`${api}/auth_user_info`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                // if (r.status) {
                dispatch(SuccessGetUser(r))
                // }
                // else {
                // dispatch(ErrorGetUser())
                // }
            })
            .catch((error) => {
                dispatch(ErrorGetUser())
            });
    }
}

export const UpdateData = (data, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartUpdateProfil())
        fetch(`${api}/update_user_info`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessUpdateUser(r))
                }
                else {
                    dispatch(ErrorUpdateUser())
                }
            })
            .catch((error) => {
                dispatch(ErrorUpdateUser())
            });
    }
}

export const UpdateUserAvatar = (url, token) => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'multipart/form-data');
    myHeaders.append('Authorization', `Bearer ${token}`);
    let body = new FormData();
    body.append('avatar', {
        uri: url,
        name: 'avatar.png',
        filename: 'imageName.png',
        type: 'image/png',
    });
    body.append('Content-Type', 'image/png');
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: body,
    };
    return (dispatch) => {
        dispatch(StartUpdateUserAvatar())
        fetch(`${api}/update_user_avatar`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(GetAuthUser(token))
                    dispatch(SuccessUpdateUserAvatar(r))
                }
                else {
                    dispatch(ErrorUpdateUserAvatar())
                }
            })
            .catch((error) => {
                dispatch(ErrorUpdateUserAvatar())
            });
    }
}

export const GetStoryes = (token) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    return (dispatch) => {
        dispatch(StartGetStoryes())
        fetch(`${api}/get_story`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetStoryes(r))
                }
                else {
                    dispatch(ErrorGetstoryes())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetstoryes())
            });
    }
}

export const GetBaners = (type, token) => {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
    return (dispatch) => {
        dispatch(StartGetBaners())
        fetch(`https://basrabackend.justcode.am/api/app/get_banner?slider=${type}`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    if (type === 'first') {
                        dispatch(SuccessGetFirstBaners(r))
                    }
                    else {
                        dispatch(SuccessGetBaners(r))
                    }
                }
                else {
                    dispatch(ErrorGetBaners())
                }
            })
            .catch(error => {
                dispatch(ErrorGetBaners())
            });
    }
}

export const GetProducts = (data, token) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        // body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartGetProducets())
        fetch(`${api}/get_category`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetProducets(r.data))
                }
                else {
                    dispatch(ErrorGetProducts())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetProducts())
            });
    }
}

export const GetSearchHistory = (token, page) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    return (dispatch) => {
        dispatch(StartGetSearchHistory())
        fetch(`${api}/get_history_search?page=${page}`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetSearchHistory(r))
                }
                else {
                    dispatch(ErrorGetSearchHistory())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetSearchHistory())
            });
    }
}

export const GetProductsByCategory = (data, token, page = 1) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartGetProductByCategory())
        fetch(`${api}/products?page=${page}`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetProductByCateogy(r.data))
                }
                else {
                    dispatch(ErrorGetProductByCategory())
                }
            })
            .catch(error => {
                dispatch(ErrorGetProductByCategory())
            });
    }

}

export const GetSinglProduct = (data, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartGetSinglProduct())
        fetch(`${api}/single_page_product`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetSinglProduct(r.data))
                }
                else {
                    dispatch(ErrorGetSinglPorduct())
                }
            })
            .catch(error => {
                dispatch(ErrorGetSinglPorduct())
            });
    }
}

export const AddDelateFavorite = (data, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        fetch(`${api}/add_or_delete_in_favorite`, requestOptions)
            .then(response => response.json())
            .then(r => {
            })
            .catch(error => {
            });
    }
}

export const GetFavorites = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        fetch(`${api}/add_or_delete_in_favorite`, requestOptions)
            .then(response => response.json())
            .then(r => {
            })
            .catch(error => {
            });
    }
}

export const GetAllFavorites = (token, page) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    return (dispatch) => {
        dispatch(StartGetFavorites())
        fetch(`${api}/get_my_favorite?page=${page}`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetFavorites(r.data))
                }
                else {
                    dispatch(ErrorGetFavorites)
                }
            })
            .catch((error) => {
                dispatch(ErrorGetFavorites())
            });
    }
}

export const AddToBasketAction = (data, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        fetch(`${api}/add_product_in_basket`, requestOptions)
            .then(response => response.json())
            .then(r => {
            })
            .catch(error => {
            });
    }
}

export const RemoveFromBasketAction = (data, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        fetch(`${api}/delete_one_product_in_basket`, requestOptions)
            .then(response => response.json())
            .then(r => {
            })
            .catch(error => {
            });
    }
}



export const GetBasketAction = (token, page = 1) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
    };
    return (dispatch) => {
        dispatch(StartGetBasket())
        fetch(`${api}/get_basket?page=${page}`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {

                    dispatch(SuccessGetBasket(r))
                }
                else {
                    dispatch(ErrorGetBasket())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetBasket())
            });
    }
}

export const MinusFromBassket = (data, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        fetch(`${api}/minus_product_in_basket`, requestOptions)
            .then(response => response.json())
            .then(r => {
            })
            .catch(error => {
            });
    }
}

export const ValidORderAction = (token) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
    };
    return (dispatch) => {
        dispatch(StartValidOrder())
        fetch(`${api}/validation_product_in_basket`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessValidOrder(r))
                }
                else {
                    dispatch(ErrorValidOrder())
                }
            })
            .catch((error) => {
                console.log(error)
                dispatch(ErrorValidOrder())
            });
    }
}

export const ClearValidOrder = () => {
    return {
        type: 'ClearValidOrder'
    }
}

export const GetCityes = (token) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    return (dispatch) => {
        dispatch(StartGetCityes())
        fetch(`https://basrabackend.justcode.am/api/get_cities`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetCityes(r.data))
                }
                else {
                    dispatch(ErrorGetCityes())
                }
            })
            .catch((error) => {
                console.log(error)
                dispatch(ErrorGetCityes())
            });
    }
}

export const DeliveryType = (token) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    return (dispatch) => {
        dispatch(StartDelivery())
        fetch(`${api2}/get_delivery_type`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessDelivery(r.data))
                }
                else {
                    dispatch(ErrorDelivery())
                }
            })
            .catch((error) => {
                console.log(error)
                dispatch(ErrorDelivery())
            });
    }
}

export const GetPaymentType = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    return (dispatch) => {
        dispatch(StartPaymentType())
        fetch(`${api2}/get_payment_type`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessPaymentType(r.data))
                }
                else {
                    dispatch(ErrorPaymentType())
                }
            })
            .catch((error) => {
                console.log('error', error)
                dispatch(ErrorPaymentType())
            });
    }

}

export const creatHistorySearch = (data, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        fetch(`${api}/create_history_search`, requestOptions)
            .then(response => response.json())
            .then(r => {
                console.log(r, 'ww')
            })
            .catch(error => {
            });
    }
}

export const LogoutAction = (token) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
    };
    return (dispatch) => {
        fetch(`${api}/logout`, requestOptions)
            .then(response => response.json())
            .then(r => {
                AsyncStorage.removeItem('token')
            })
            .catch(error => {
            });
    }
}

export const BuyerInfo = (data) => {
    return {
        type: 'BuyerINfo',
        data
    }
}

export const AddNewOrder = (data, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartNewOrder())
        fetch(`${api}/add_new_order`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessNewOrder(r.data))
                }
                else {
                    dispatch(ErrorNewOrder())
                }
            })
            .catch(error => {
                console.log(error, 'error')
                dispatch(ErrorNewOrder())
            });
    }
}


export const ClearOrderStatus = () => {
    return {
        type: 'ClearOrderStatus'
    }
}

export const GetChatAction = (data, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartGetSinglChat())
        fetch(`${api}/single_page_chat`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetSinglCaht(r.data))
                }
                else {
                    dispatch(ErrorGetSinglChat())
                }
            })
            .catch(error => {
                dispatch(ErrorGetSinglChat())
            });
    }
}

export const SendMsg = () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartGetSinglChat())
        fetch(`${api}/admin/new_message`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    // dispatch(SuccessGetSinglCaht(r.data))
                }
                else {
                    // dispatch(ErrorGetSinglChat())
                }
            })
            .catch(error => {
                // dispatch(ErrorGetSinglChat())
            });
    }

}