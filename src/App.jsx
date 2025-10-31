import style from './App.module.css'
import { AddTodoForm } from './components/AddTodoForm/AddTodoForm'
import { TodoList } from './components/TodoList/TodoList'

export function App() {
	return (
		<div className={style.app}>
			<h1>Мой список задач</h1>
			<AddTodoForm />
			<TodoList />
		</div>
	)
}
