import { createSelector } from "reselect"

export const selectTodos = (state) => state.todos.items
export const selectSearchQuery = (state) => state.ui.searchQuery
export const selectIsSorted = (state) => state.ui.isSorted

export const selectFilteredAndSortedTodos = createSelector(
	[selectTodos, selectSearchQuery, selectIsSorted],
	(todos, searchQuery, isSorted) => {
		let result = todos.filter(task => task.title.toLowerCase().includes(searchQuery.toLowerCase()))

		if (isSorted) {
			result.sort((a, b) => a.title.localeCompare(b.title, 'ru', { sensitivity: 'base' }))
		}

		return result
	}
)

export const selectLoading = (state) => state.todos.loading
export const selectError = (state) => state.todos.error
export const selectNewTaskTitle = (state) => state.ui.newTaskTitle
export const selectEditingTaskId = (state) => state.ui.editingTaskId
