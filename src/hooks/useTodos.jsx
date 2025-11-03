import { useDispatch, useSelector } from 'react-redux';
import {
	selectEditingTaskId,
	selectError,
	selectFilteredAndSortedTodos,
	selectIsSorted,
	selectLoading,
	selectNewTaskTitle,
	selectSearchQuery,
} from '../selectors/selectors';
import { useEffect } from 'react';
import {
	addTodo,
	deleteTodo,
	editTodo,
	fetchTodo,
	toggleTodo,
} from '../actions';
import {
	setEditingTask,
	setNewTaskTitle,
	setSearchQuery,
	toggleSort,
} from '../actions/uiActions';

export const useTodos = () => {
	const todos = useSelector(selectFilteredAndSortedTodos);
	const loading = useSelector(selectLoading);
	const error = useSelector(selectError);
	const searchQuery = useSelector(selectSearchQuery);
	const newTaskTitle = useSelector(selectNewTaskTitle);
	const isSorted = useSelector(selectIsSorted);
	const editingTaskId = useSelector(selectEditingTaskId);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTodo);
	}, [dispatch]);

	const handleDelete = (id) => {
		dispatch(deleteTodo(id));
	};

	const handleEdit = (id, title) => {
		dispatch(setEditingTask(id));
		dispatch(setNewTaskTitle(title));
	};

	const handleToggle = (id, completed) => {
		dispatch(toggleTodo(id, completed));
	};

	const handleInputOnChange = (e) => {
		dispatch(setNewTaskTitle(e.target.value));
	};

	const handleSearchChange = (e) => {
		dispatch(setSearchQuery(e.target.value));
	};

	const handleSortToggle = () => {
		dispatch(toggleSort());
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newTaskTitle?.trim()) return;

		if (editingTaskId) {
			dispatch(editTodo(editingTaskId, newTaskTitle));
			dispatch(setEditingTask(null));
		} else {
			dispatch(addTodo(newTaskTitle));
		}
		dispatch(setNewTaskTitle(''));
	};

	return {
		todos,
		loading,
		error,
		searchQuery,
		newTaskTitle,
		isSorted,
		editingTaskId,
		handleDelete,
		handleEdit,
		handleToggle,
		handleInputOnChange,
		handleSearchChange,
		handleSortToggle,
		handleSubmit,
	};
};
