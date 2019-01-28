import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
	results: [],
}

const deleteResult = (state, action) => {
	let newResults = state.results.slice(0)
	newResults.splice(action.index, 1)
	return updateObject(state, { results: newResults })
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.STORE_RESULT:
			return updateObject(state, { results: [...state.results, action.result] })
		case actionTypes.DELETE_RESULT:
			return deleteResult(state, action)

		default:
			console.log('uncaught action in reducer ', action.type)
			return state
	}
}

export default reducer
