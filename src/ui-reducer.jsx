import { SET_SEARCH_QUERY, TOGGLE_SORT, SET_EDITING_TASK, SET_NEW_TASK_TITLE } from './actions'

export const initialState = {
	isSorted: false,
	searchQuery: '',
	editingTaskId: null,
	newTaskTitle: ''
}

export const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SEARCH_QUERY: {
			return {
				...state,
				searchQuery: action.payload,
			}
		}
		case TOGGLE_SORT: {
			return {
				...state,
				isSorted: !state.isSorted
			}
		}
		case SET_EDITING_TASK: {
			return {
				...state,
				editingTaskId: action.payload
			}
		}
		case SET_NEW_TASK_TITLE: {
			return {
				...state,
				newTaskTitle: action.payload
			}
		}
		default:
			return state
	}
}
