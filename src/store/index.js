import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0
    },
    reducers: {
        increment(state, action) {
            state.counter++;
        },
        decrement(state, action) {
            state.counter--;
        },
        addBy(state, action) {
            state.counter += action.payload;
        }
    }
});

const store = configureStore({
    reducer: counterSlice.reducer
});

export const actions = counterSlice.actions;
export default store;

// import { legacy_createStore as createStore } from 'redux';

// const reducer = (state = { counter: 0 }, action) => {
//     if(action.type === 'INC') {
//         return {
//             counter: state.counter + 1
//         }
//     }

//     else if(action.type === 'DEC') {
//         return {
//             counter: state.counter - 1
//         }
//     }

//     else if(action.type === 'ADD') {
//         return {
//             counter: state.counter + action.payload
//         }
//     }

//     else {
//         return state;
//     }
// }

// const store = createStore(reducer);

// export default store;
