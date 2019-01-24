import * as actionTypes from '../actions';

const initialState = {
	results: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.STORE_RESULT:
			return { ...state, results: [...state.results, action.result] };
		case actionTypes.DELETE_RESULT:
			console.log(action);
			let newResults = state.results.slice(0);
			newResults.splice(action.index, 1);
			return { ...state, results: newResults };

		default:
			console.log('uncaught action in reducer ', action.type);
			return state;
	}
};

export default reducer;
