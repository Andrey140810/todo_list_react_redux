import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { deleteTodo, fetchTodo, toggleTodo } from '../../actions'
import { TodoItem } from '../TodoItem/TodoItem'
import { selectFilteredAndSortedTodos } from '../../selectors/selectors'
import { setEditingTask, setNewTaskTitle } from '../../actions/uiActions'
import style from './TodoList.module.css'

export const TodoList = () => {
	const todos = useSelector(selectFilteredAndSortedTodos)
	const loading = useSelector(state => state.todos.loading)
	const error = useSelector(state => state.todos.error)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchTodo)
	}, [dispatch])

	if (loading) {
		return <div className={style.loader}></div>
	}

	if (error) {
		return <div className={style.error}>Ошибка : {error}</div>
	}

	const handleDelete = (id) => {
		dispatch(deleteTodo(id))
	}

	const handleEdit = (id, title) => {
		dispatch(setEditingTask(id))
		dispatch(setNewTaskTitle(title))
	}

	const handleToggle = (id, completed) => {
		dispatch(toggleTodo(id, completed))
	}
	return (
		<div className={style.list}>
			{todos.map(todo => (
				<TodoItem key={todo.id} todo={todo} onDelete={handleDelete} onEdit={handleEdit} onToggle={handleToggle} />
			))}
		</div>
	)
}
