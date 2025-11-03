import style from './AddTodoForm.module.css';
import { useTodos } from '../../hooks/useTodos';

export const AddTodoForm = () => {
	const {
		newTaskTitle,
		searchQuery,
		isSorted,
		editingTaskId,
		handleInputOnChange,
		handleSearchChange,
		handleSortToggle,
		handleSubmit,
	} = useTodos();

	return (
		<>
			<form className={style.form} onSubmit={handleSubmit}>
				<input
					className={style.input}
					type="text"
					value={newTaskTitle}
					onChange={handleInputOnChange}
					placeholder={
						editingTaskId
							? 'Измените задачу'
							: 'Введите название задачи'
					}
				/>
				<button type="submit">
					{editingTaskId ? 'Сохранить' : 'Добавить задачу'}
				</button>
			</form>
			<div className={style.form}>
				<input
					className={style.input}
					type="text"
					value={searchQuery}
					onChange={handleSearchChange}
					placeholder="Поиск"
				/>
				<button onClick={handleSortToggle}>
					{!isSorted
						? 'Сортировать по алфавиту'
						: 'Отменить сортировку'}
				</button>
			</div>
		</>
	);
};
