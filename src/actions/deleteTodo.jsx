import { API_URL, DELETE_TODO, FETCH_TODOS_FAILURE } from './typeOfActions'

export const deleteTodo = (id) => {
	return async (dispatch) => {
		try {
			const response = await fetch(`${API_URL}/${id}`, {
				method: 'DELETE'
			})
			if (!response.ok) {
				throw new Error('Ошибка в получении данных')
			}
			dispatch({
				type: DELETE_TODO,
				payload: id
			})
		} catch (error) {
			dispatch({
				type: FETCH_TODOS_FAILURE,
				payload: error.message
			})
		}
	}
}
