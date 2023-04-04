import { Todo } from "../models/todo";

export const TODO_ADD = "todo added";
export const TODO_STATUS_CHANGE = "todo status change";
export const TODO_PRIORITY_CHANGE = "todo priority change";
export const TODO_DUE_DATE_CHANGE = "todo due date change";
export const TODO_DELETE = "todo delete";
export const TODO_EDIT = "todo edit";
export const TODO_TO_EDIT = "todo to edit";
export const TODO_LIST_FETCH = "todo list fetch"
export const TODO_LIST_FETCHED = "todo list fetched"


let todoId: number = 0;

export const todoCreator = (todoTitle: string, priority: string, due_date: string, for_later: boolean) => {
    return { type: TODO_ADD, payload: { id: ++todoId, name: todoTitle, done: false, priority, due_date, for_later }, }
}

export const todoStatusChange = (id: number, done: boolean) => {
    return { type: TODO_STATUS_CHANGE, payload: { id: id, done: done } }
}

export const todoDelete = (id: number) => {
    return { type: TODO_DELETE, payload: { id } }
}

export const todoEdit = (id: number, name: string, priority: string, due_date: string) => {
    return { type: TODO_EDIT, payload: { id, name, priority, due_date } }
}

export const todoPriorityChange = (priority: string) => {
    return { type: TODO_PRIORITY_CHANGE, payload: { priority } }
}

export const todoDueDateChange = (due_date: string) => {
    return { type: TODO_DUE_DATE_CHANGE, payload: { due_date } }
}

export const todoListFetch = () => {
    return { type: TODO_LIST_FETCH }
}

export const todoListFetched = (todoList: { [id: number]: Todo }) => {
    return { type: TODO_LIST_FETCHED, payload: todoList }
}
