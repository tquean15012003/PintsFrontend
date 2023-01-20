import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { PriceReducer } from './Reducers/PriceReducer'

const rootReducer = combineReducers({
    PriceReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));