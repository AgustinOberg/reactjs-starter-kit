import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'

import configReducer from './reducers/configReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    config: configReducer,
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)