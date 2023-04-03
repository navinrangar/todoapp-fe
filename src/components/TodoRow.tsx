import { useCallback, useState } from 'react'
import { Todo } from '../models/todo'
import TodoEditor from './TodoEditor'


interface TodoRowProps {
    todo: Todo
    onStatusChange: (id: number, done: boolean) => void
    onDelete: (id: number) => void
}

const TodoRow = ({ todo, onStatusChange, onDelete }: TodoRowProps) => {

    const { id, done } = todo;

    const [showEdit, setShowEdit] = useState(false);

    const handleChange = useCallback(() => {
        onStatusChange(id, !done);
    }, [id, done])

    const handleDelete = useCallback(() => {
        onDelete(id);
    }, [id])

    const handleEdit = useCallback(() => {
        setShowEdit(!showEdit);
    }, [showEdit])

    return (
        <div>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-3 self-center'>
                    <input type={"checkbox"} checked={done} className="text-xs cursor-pointer" onClick={() => handleChange()} />
                    <p className={todo?.done ? 'overline' : 'underline'}> {todo?.name} </p>
                    {!done &&
                        <p className='cursor-pointer' onClick={handleEdit}> ~ </p>
                    }
                    {done &&
                        <p className="cursor-pointer" onClick={handleDelete}> - </p>
                    }
                </div>
                <div className='flex flex-col'>
                    {showEdit &&
                        <TodoEditor todoToEdit={todo} setFormClose={setShowEdit} />
                    }
                </div>
            </div>
        </div>
    )
}

export default TodoRow;