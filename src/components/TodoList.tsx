import { connect } from 'react-redux';
import { State } from '../store';
import { todoDelete, todoListFetch, todoStatusChange } from '../actions/todo';
import { Todo } from '../models/todo';
import { allTodoTaskListSelector, doneListSelector, todoFilterSelector, todoForLaterSelector, todoListSelector } from '../selectors/todo';
import TodoRow from './TodoRow';
import { useEffect } from 'react';

interface TodoListProps {
    todos: Todo[]
    onStatusChange: (id: number, done: boolean) => void
    onTodoDelete: (id: number) => void
    fetchTodoList: () => void;
}

const TodoList = ({ todos, onStatusChange, onTodoDelete, fetchTodoList }: TodoListProps) => {

    useEffect(() => {
        fetchTodoList()
    }, [])


    return (
        <div>
            <div className="flex flex-col gap-2">
                <label className='font-semibold'> Todo List </label>
                {todos?.map((todo: any) => {
                    return (
                        todos.length && (
                            <TodoRow todo={todo} onStatusChange={onStatusChange} onDelete={onTodoDelete} />
                        )
                    )
                })}
            </div>
        </div>
    )
}

export default TodoList

const todoMapper = (s: State) => (
    { todos: allTodoTaskListSelector(s) }
)

const doneMapper = (s: State) => (
    { todos: doneListSelector(s) }
)

const dispatchMapper = {
    onStatusChange: todoStatusChange,
    onTodoDelete: todoDelete,
    fetchTodoList: todoListFetch,
}

const mapPriorityStateToProps = (s: State) => {
    return { todos: todoFilterSelector(s) }
}

const mapForLaterStateToProps = (s: State) => {
    return { todos: todoForLaterSelector(s) }
}

export const TodoComponent = connect(todoMapper, dispatchMapper)(TodoList);
export const DoneComponent = connect(doneMapper, dispatchMapper)(TodoList);
export const PriorityComponent = connect(mapPriorityStateToProps, dispatchMapper)(TodoList);
export const ForLaterComponent = connect(mapForLaterStateToProps, dispatchMapper)(TodoList);