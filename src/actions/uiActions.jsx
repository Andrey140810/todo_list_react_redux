import { SET_EDITING_TASK, SET_NEW_TASK_TITLE, SET_SEARCH_QUERY, TOGGLE_SORT } from "./typeOfActions";

export const setSearchQuery = (query) => ({ type: SET_SEARCH_QUERY, payload: query })
export const setNewTaskTitle = (title) => ({ type: SET_NEW_TASK_TITLE, payload: title })
export const toggleSort = () => ({ type: TOGGLE_SORT })
export const setEditingTask = (id) => ({ type: SET_EDITING_TASK, payload: id })
