import { FETCH_TODOS_FAILURE, FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from './actions'

export const initialState = {
	items: [],
	loading: false,
	error: null
}

export const todosReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TODOS_REQUEST: {
			return {
				...state,
				loading: true
			}
		}
		case FETCH_TODOS_SUCCESS: {
			return {
				...state,
				items: action.payload,
				loading: false
			}
		}
		case FETCH_TODOS_FAILURE: {
			return {
				...state,
				loading: false,
				error: action.payload
			}
		}
		case ADD_TODO: {
			return {
				...state,
				items: [...state.items, action.payload]
			}
		}
		case DELETE_TODO: {
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.payload)
			}
		}
		case EDIT_TODO: {
			return {
				...state,
				items: state.items.map(item => item.id === action.payload.id ? action.payload : item)
			}
		}
		case TOGGLE_TODO: {
			return {
				...state,
				items: state.items.map(item => item.id === action.payload.id ? action.payload : item)
			}
		}
		default:
			return state
	}
}
