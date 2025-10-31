import { API_URL, FETCH_TODOS_FAILURE, TOGGLE_TODO } from './typeOfActions'

export const toggleTodo = (id, completed) => {
	return async (dispatch) => {
		try {
			const response = await fetch(`${API_URL}/${id}`, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ completed: !completed })
			})
			if (!response.ok) {
				throw new Error('Ошибка в изменении данных')
			}
			const updateToggleTodo = await response.json()
			dispatch({
				type: TOGGLE_TODO,
				payload: updateToggleTodo
			})
		} catch(error) {
			dispatch({
				type: FETCH_TODOS_FAILURE,
				payload: error.message
			})
		}
	}
}
