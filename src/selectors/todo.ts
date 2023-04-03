import { createSelector } from "reselect";
import { AppState } from "../store";
import { ObjectKeys } from "../utils";

const todoStateSelector = (state: AppState) => state.todos;

export const todoArrayStateSelector = (state: AppState) => Object.keys(state.todos.tasks).map((id) => state.todos.tasks[id as any])

export const todoArrayStateSelector2 = createSelector(todoStateSelector,
    (todoState: any) => ObjectKeys<number>(todoState).map((todoId: any) => todoState[todoId]))


export const todoListSelector = (state: AppState) => {
    const todos = todoArrayStateSelector(state).filter((todo: any) => !todo.done)
    return todos;
}

export const todoListSelector2 = createSelector(todoArrayStateSelector, (todoState) => todoState.filter((todo: any) => !todo.done));


//doneListSelectors

export const doneListSelector = (state: AppState) => {
    const done = todoArrayStateSelector(state).filter((todo: any) => todo.done)
    return done;
}

export const doneListSelector2 = createSelector(todoArrayStateSelector, (todoState) => todoState.filter((todo: any) => todo.done));


//prioritySelectors

export const todoFilterSelector = (state: AppState) => {
    const priorityTodo = todoArrayStateSelector(state).filter((todo: any) => {
        if(todo.done)
        return;
        if(state.todos.filters.level.toLowerCase() === 'all' && todo.due_date === state.todos.filters.due_date) {
            return todo;
        }
        else if (todo.priority.toLowerCase() === state.todos.filters.level.toLowerCase() &&
            todo.due_date === state.todos.filters.due_date) {
                return todo;
            }
    })
    return priorityTodo;
}


//forLater selectors 

export const todoForLaterSelector = (state: AppState) => {
   const forLaterTodo = todoArrayStateSelector(state).filter((todo: any) => {
        if(todo.for_later)
        return todo;
    })
    return forLaterTodo;
}













export const userStateSelector = (state: AppState) => Object.keys(state.users).map((id) => state.users[id as any]);


//UserListSelector
export const userListSelector = (state: AppState) => {
    return userStateSelector(state);
}

export const userListSelector2 = createSelector(userListSelector, (users) => userListSelector)