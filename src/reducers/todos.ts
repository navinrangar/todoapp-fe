import { AnyAction, Reducer } from "redux";
import { TODO_ADD, TODO_DELETE, TODO_DUE_DATE_CHANGE, TODO_EDIT, TODO_LIST_FETCH, TODO_LIST_FETCHED, TODO_PRIORITY_CHANGE, TODO_STATUS_CHANGE } from "../actions/todo";
import { Todo, TodoFilters } from "../models/todo";

export interface TodoState {
    tasks: { [id: number]: Todo }
    filters: TodoFilters
    isLoggedIn: boolean
}

export const initialTodoState = { tasks: {}, filters: { level: 'high', due_date: '2023-03-14' }, isLoggedIn: false };

export const todoReducer: Reducer<TodoState> = (state = initialTodoState, action: AnyAction) => {
    switch (action.type) {
        case TODO_ADD: {
            const todo = action.payload;
            const newState = { ...state, tasks: { ...state.tasks, [todo.id]: todo } }
            return newState;
        }

        case TODO_PRIORITY_CHANGE: {
            const { priority } = action.payload;
            return { ...state, filters: { ...state.filters, level: priority } }
        }

        case TODO_DUE_DATE_CHANGE: {
            const { due_date } = action.payload;
            return { ...state, filters: { ...state.filters, due_date } }
        }

        case TODO_STATUS_CHANGE: {
            const { id, done } = action.payload;

            return { ...state, tasks: { ...state.tasks, [id]: { ...state.tasks[id], done } } }
        }

        case TODO_DELETE: {
            const { id } = action.payload;
            let newTasks = { ...state.tasks };
            if (newTasks[id].done)
                delete newTasks[id];
            let newState = { ...state, tasks: newTasks }
            return newState;
        }

        case TODO_EDIT: {
            const { id, name, priority, due_date } = action.payload;
            return { ...state, tasks: { ...state.tasks, [id]: { ...state.tasks[id], name, priority, due_date } } }
        }

        case TODO_LIST_FETCHED: {
            const todoList = action.payload;
            return { ...state, tasks: { ...state.tasks, ...action.payload } }
        }

        default: {
            return state;
        }
    }
}