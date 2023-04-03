import { connect} from 'react-redux';
import { AppState } from '../store';
import { todoDelete, todoStatusChange } from '../actions/todo';
import { Todo } from '../models/todo';
import { doneListSelector, todoFilterSelector, todoForLaterSelector, todoListSelector } from '../selectors/todo';
import TodoRow from './TodoRow';

interface TodoListProps {
    todos: Todo[]
    doneList: boolean
    onStatusChange: (id: number, done: boolean) => void
    onTodoDelete: (id: number) => void
}

function TodoList({ todos, doneList, onStatusChange, onTodoDelete }: TodoListProps) {

    return (
        <div>
            <div className="flex flex-col gap-2">
                <label className='font-semibold'> {doneList ? 'Done' : 'Todo'} List </label>
                {todos?.map((todo: any) => {
                    return (
                        todos.length && (
                            <TodoRow todo={todo} onStatusChange={onStatusChange} onDelete={onTodoDelete}/>
                        )
                    )
                })}
            </div>
        </div>
    )
}

export default TodoList

const todoMapper = (s: AppState) => (
    { todos: todoListSelector(s), doneList: false }
)

const doneMapper = (s: AppState) => (
    { todos: doneListSelector(s), doneList: true }
)

const dispatchMapper = {
    onStatusChange: todoStatusChange,
    onTodoDelete: todoDelete,
}

const mapPriorityStateToProps = (s: AppState) => {
    return { todos: todoFilterSelector(s), doneList: false}
}

const mapForLaterStateToProps = (s: AppState) => {
    return {todos: todoForLaterSelector(s), doneList: false}
}

export const TodoComponent = connect(todoMapper, dispatchMapper)(TodoList);
export const DoneComponent = connect(doneMapper, dispatchMapper)(TodoList);
export const PriorityComponent = connect(mapPriorityStateToProps, dispatchMapper)(TodoList);
export const ForLaterComponent = connect(mapForLaterStateToProps, dispatchMapper)(TodoList);