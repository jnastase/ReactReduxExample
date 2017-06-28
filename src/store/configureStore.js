import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        compose(applyMiddleware(thunk))
    )
}