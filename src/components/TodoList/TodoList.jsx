import { TodoItem } from '../TodoItem/TodoItem';
import style from './TodoList.module.css';
import { useTodos } from '../../hooks/useTodos';

export const TodoList = () => {
	const { todos, loading, error, handleDelete, handleEdit, handleToggle } =
		useTodos();

	if (loading) {
		return <div className={style.loader}></div>;
	}

	if (error) {
		return <div className={style.error}>Ошибка : {error}</div>;
	}

	return (
		<div className={style.list}>
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					onDelete={handleDelete}
					onEdit={handleEdit}
					onToggle={handleToggle}
				/>
			))}
		</div>
	);
};
