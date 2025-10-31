import style from './TodoItem.module.css'

export const TodoItem = ({ todo, onDelete, onEdit, onToggle }) => {

	return (
		<div className={style.item}>
			<span className={`${style['task-title']} ${todo.completed ? style['task-completed'] : ''}`}>{todo.title}</span>
			<button type='button' onClick={() => onEdit(todo.id, todo.title)} className={style['task-item-button']}>Редактировать</button>
			<button type='button' onClick={() => onDelete(todo.id)} className={style['task-item-button']}>Удалить</button>
			<input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id, todo.completed)} />
		</div>
	)
}
