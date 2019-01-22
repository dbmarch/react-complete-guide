const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
	counter: 0,
};

const rootReducer = (state = initialState, action) => {
	let newState;
	switch (action.type) {
		case 'INC_COUNTER':
			newState = { ...state, counter: state.counter + 1 };
			break;
		case 'ADD_COUNTER':
			newState = { ...state, counter: state.counter + action.value };
			break;
		default:
			break;
	}
	return newState;
};

// store
const store = createStore(rootReducer);
console.log(store.getState());

store.subscribe(() => {
	console.log('[SUBSCRIPTION] ', store.getState());
});

// Dispatching Action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
