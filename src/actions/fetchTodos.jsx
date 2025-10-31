import { FETCH_TODOS_REQUEST, FETCH_TODOS_FAILURE, FETCH_TODOS_SUCCESS, API_URL } from './typeOfActions'

export const fetchTodo = () => {
	return async (dispatch) => {
		dispatch({
			type:FETCH_TODOS_REQUEST
		})
		try {
			const response = await fetch(API_URL)
			if (!response.ok) {
				throw new Error('Ошибка в получении данных')
			}
			const todos = await response.json()
			dispatch({
				type:FETCH_TODOS_SUCCESS,
				payload: todos
			})
		} catch(error) {
			dispatch({
				type: FETCH_TODOS_FAILURE,
				payload: error.message
			})
		}
	}
}
