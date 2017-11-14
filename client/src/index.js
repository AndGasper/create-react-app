import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import App from './components/app';


import requireAuth from './components/auth/require_auth';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

// react router v4 has done away with children?
// I think now you just set the exact path and the components
// that are specified will be rendered
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>

                <Route exact path = "/" component={someComponent} />


            </Switch>
        </BrowserRouter>

    </Provider>,
    document.getElementById('root')
);