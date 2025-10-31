import style from './AddTodoForm.module.css'
import { addTodo, editTodo } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import { selectEditingTaskId, selectIsSorted, selectNewTaskTitle, selectSearchQuery } from '../../selectors/selectors'
import { setEditingTask, setNewTaskTitle, setSearchQuery, toggleSort } from '../../actions/uiActions'

export const AddTodoForm = () => {
	const searchQuery = useSelector(selectSearchQuery)
	const newTaskTitle = useSelector(selectNewTaskTitle)
	const isSorted = useSelector(selectIsSorted)
	const editingTaskId = useSelector(selectEditingTaskId)

	const dispatch = useDispatch()

	const handleInputOnChange = (e) => {
		dispatch(setNewTaskTitle(e.target.value))
	}

	const handleSearchChange = (e) => {
		dispatch(setSearchQuery(e.target.value))
	}

	const handleSortToggle = () => {
		dispatch(toggleSort())
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!(newTaskTitle?.trim())) return

		if(editingTaskId) {
			dispatch(editTodo(editingTaskId, newTaskTitle))
			dispatch(setEditingTask(null))
		} else {
			dispatch(addTodo(newTaskTitle))
		}
		dispatch(setNewTaskTitle(''))
	}

	return (
		<>
			<form className={style.form} onSubmit={handleSubmit}>
				<input className={style.input} type="text" value={newTaskTitle} onChange={handleInputOnChange} placeholder={editingTaskId ? 'Измените задачу' : 'Введите название задачи'} />
				<button type='submit'>{editingTaskId ? 'Сохранить' : 'Добавить задачу'}</button>
			</form>
			<div className={style.form}>
				<input className={style.input} type="text" value={searchQuery} onChange={handleSearchChange} placeholder='Поиск' />
				<button onClick={handleSortToggle}>{!isSorted ? 'Сортировать по алфавиту' : 'Отменить сортировку'}</button>
			</div>
		</>



	)
}
