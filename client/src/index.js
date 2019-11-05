import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }  from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import rootReducer from './reducer/index'
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import NavgationBar from './components/NavgationBar'
import routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger,thunk))
)



ReactDOM.render(
    <Provider store={ store }>
        <Router route={ routes }>
            <NavgationBar/>
            { routes }
        </Router>
    </Provider>,
    document.getElementById('root')
);



serviceWorker.unregister();
