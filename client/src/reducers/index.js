import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './auth_reducer';
import genericReducer from './generic_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    generic: genericReducer
});

// generic: genericReducer - placeholder

export default rootReducer;