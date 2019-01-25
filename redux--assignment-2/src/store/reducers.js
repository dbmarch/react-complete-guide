import * as actionTypes from './actions';

const initialState = {
	persons: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_PERSON:
			console.log('reducer: add person ', action.payload);
			return { ...state, persons: [...state.persons, action.payload] };

		case actionTypes.REMOVE_PERSON:
			//return { ...state, results: [...state.persons, action.result] };
			console.log('reducer: remove person ', action.payload);
			return { ...state, persons: state.persons.filter(person => person.id !== action.payload) };

		default:
			console.log('uncaught action in reducer ', action.type);
			return state;
	}
};

export default reducer;
