import { legacy_createStore as createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const store = createStore(rootReducer);

export default store;