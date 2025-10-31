import { ADD_TODO, FETCH_TODOS_FAILURE, API_URL } from './typeOfActions'

export const addTodo = (title) => {
	return async (dispatch) => {
		try {
			const DATA_POST = {
				title,
				completed: false
			}
			const response = await fetch(API_URL, {
				method: 'POST',
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify(DATA_POST)
			})
			if (!response.ok) {
				throw new Error('Ошибка в получении данных')
			}
			const newTodo = await response.json()
			dispatch({
				type: ADD_TODO,
				payload: newTodo
			})
		} catch(error) {
			dispatch({
				type: FETCH_TODOS_FAILURE,
				payload: error.message
			})
		}
	}
}
