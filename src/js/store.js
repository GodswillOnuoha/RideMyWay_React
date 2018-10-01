import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import loggeer from 'redux-logger';
import promise from 'redux-promise-middleware';
import reducer from './reducers';

const middleware = applyMiddleware(promise(), thunk)

export default createStore(reducer, middleware);

// const reducer = (state, action) => {
//     if (action.type === "INC") {
//         return state + action.payload;
//     }
//     if (action.type === "DEC") {
//         return state - action.payload;
//     }
//     return state;
// }

// const store = createStore(reducer, 0)

// store.subscribe(() => {
//     console.log("store changed: ", store.getState());
// })


// store.dispatch({ type: "INC", payload: 5 })
// store.dispatch({ type: "INC", payload: 2 })
// store.dispatch({ type: "DEC", payload: 8 })
// store.dispatch({ type: "INC", payload: 190 })
// store.dispatch({ type: "DEC", payload: 12 })

// exports.store = store;