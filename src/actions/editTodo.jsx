import { API_URL, EDIT_TODO, FETCH_TODOS_FAILURE } from './typeOfActions'

export const editTodo = (id, title) => {
	return async (dispatch) => {
		try {
			const response = await fetch(`${API_URL}/${id}`, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ title })
			})
			if (!response.ok) {
				throw new Error('Ошибка в получении данных')
			}
			const updateTodo = await response.json()
			dispatch({
				type: EDIT_TODO,
				payload: updateTodo
			})
		} catch(error) {
			dispatch({
				type: FETCH_TODOS_FAILURE,
				payload: error.message
			})
		}
	}
}
