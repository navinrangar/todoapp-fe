import { createSelector } from "reselect";
import { State } from "../store";
import { ObjectKeys, ObjectToArray } from "../utils";

const todoStateSelector = (state: State) => state.todos;
const todoTaskStateSelector = createSelector(todoStateSelector, (todoState: any) => todoState.tasks);

export const todoArrayStateSelector = (state: State) => Object.keys(state.todos.tasks).map((id) => state.todos.tasks[id as any])

export const todoArrayStateSelector2 = createSelector(todoStateSelector,
    (todoState: any) => ObjectKeys<number>(todoState).map((todoId: any) => todoState[todoId]))


export const todoListSelector = (state: State) => {
    const todos = todoArrayStateSelector(state).filter((todo: any) => !todo.done)
    return todos;
}

export const todoListSelector2 = createSelector(todoArrayStateSelector, (todoState) => todoState.filter((todo: any) => !todo.done));

export const allTodoTaskListSelector = createSelector(todoTaskStateSelector, (taskState: any) => Object.keys(taskState).map((id: string) => taskState[id]))

//doneListSelectors

export const doneListSelector = (state: State) => {
    const done = todoArrayStateSelector(state).filter((todo: any) => todo.done)
    return done;
}

export const doneListSelector2 = createSelector(todoArrayStateSelector, (todoState) => todoState.filter((todo: any) => todo.done));


//prioritySelectors

export const todoFilterSelector = (state: State) => {
    const priorityTodo = todoArrayStateSelector(state).filter((todo: any) => {
        if (todo.done)
            return;
        if (state.todos.filters.level.toLowerCase() === 'all' && todo.due_date === state.todos.filters.due_date) {
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

export const todoForLaterSelector = (state: State) => {
    const forLaterTodo = todoArrayStateSelector(state).filter((todo: any) => {
        if (todo.for_later)
            return todo;
    })
    return forLaterTodo;
}


export const userStateSelector = (state: State) => Object.keys(state.loggedInUser).map((id) => state.loggedInUser.id);
export const loggedInUserSelector = (state: State) => state.loggedInUser;


//UserListSelector
export const userListSelector = (state: State) => {
    return userStateSelector(state);
}

export const userListSelector2 = createSelector(userListSelector, (user) => userListSelector)