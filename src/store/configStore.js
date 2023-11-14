import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk"
import { AutReducer } from './reducer/LoginReducer';
import { ConfirmCodeReducer } from './reducer/ConfirmCodeReducer';
import { StaticReducer } from './reducer/staticReducer';
import { GetUserReducer } from './reducer/getUserReducer';
import { UpdateUserInfoReducer } from './reducer/UpdateUserInfoReducer';
import { UpdatePhotoReducer } from './reducer/UpdatePhotoReducer';
import { GetStoryesReducer } from './reducer/getStoryesReducer';
import { GetBanersReducer } from './reducer/getBanersReducer';
import { GetProductsReducer } from './reducer/GetProducetsReducer';
import { getSearchHistoryReducer } from './reducer/getSearchHistoryReducer';
import { GetProductByCategoryReducer } from './reducer/GetProductByCategoryReducer';
import { GetSinglProductReduer } from './reducer/getSinglPorductReducer';
import { GetAllFavoritesReducer } from './reducer/GetFavoritesReducer';
import { GetBasketReducer } from './reducer/GetBasketReducer';
import { ValidOrderReducer } from './reducer/ValidOrderReducer';
import { GetCityesReducer } from './reducer/getCityesReducer';
import { GetDeliveryReducer } from './reducer/getDeliveryReducer';
import { GetPaymentTypeReducer } from './reducer/getPaymentTypeReducer';
import { AddInfoReducer } from './reducer/AddInfoReducer';
import { AddNewOrderReducer } from './reducer/AddNewOrderReducer';
import { SinglChatReducer } from './reducer/SinglChatReducer';

const rootReducer = combineReducers({
    login: AutReducer,
    confirmCode: ConfirmCodeReducer,
    static: StaticReducer,
    getUser: GetUserReducer,
    updateUser: UpdateUserInfoReducer,
    updatePhoto: UpdatePhotoReducer,
    getStoryes: GetStoryesReducer,
    getBaner: GetBanersReducer,
    getProducets: GetProductsReducer,
    getSearchHistory: getSearchHistoryReducer,
    getPorductByCategoy: GetProductByCategoryReducer,
    getSinglProduct: GetSinglProductReduer,
    getFavorites: GetAllFavoritesReducer,
    getBasket: GetBasketReducer,
    validOrder: ValidOrderReducer,
    getCityes: GetCityesReducer,
    getDelivery: GetDeliveryReducer,
    getPaymentType: GetPaymentTypeReducer,
    addInfo: AddInfoReducer,
    addNewOrder: AddNewOrderReducer,
    singlChat: SinglChatReducer,
});


export const store = createStore(rootReducer, applyMiddleware(thunk));
