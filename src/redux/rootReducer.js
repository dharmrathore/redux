import {combineReducers} from 'redux';

import authReducer from './reducers/authReducer';
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    product: productReducer,

});

export default rootReducer; 