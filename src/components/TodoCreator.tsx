import React, { ChangeEvent, FormEvent, memo, useState } from 'react'
import { connect } from 'react-redux';
import { todoCreator } from '../actions/todo';
import { v4 as uuidv4 } from "uuid";

type TodoCreatorProps = {
    onSubmit: Function //(todoText: string, priority: string, due_date: string) => void;
}

const TodoCreator = ({ onSubmit }: TodoCreatorProps) => {

    const today = new Date().toJSON().slice(0, 10);
    const [todo, setTodo] = useState<string>('');
    const [priority, setPriority] = useState<string>('Low');
    const [dueDate, setDueDate] = useState<string>(today);
    const [forLater, setForLater] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value)
    }

    const handlePriorityChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPriority(e.target.value);
    }

    const handleDueDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDueDate(e.target.value)
    }

    const handleForLater = (e: ChangeEvent<HTMLInputElement>) => {
        setForLater(e.target.checked);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (todo) {
            if (!forLater) {
                onSubmit(todo, priority, dueDate, forLater);
            } else {
                onSubmit(todo, '', '', forLater)
            }
            setTodo('');
        }
    }


    return (
        <div className="inline-block gap-3 border-1 outline my-4">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input className="outline-none" type="text" value={todo} onChange={(e) => handleChange(e)} />
                {!forLater &&
                    <>
                        <select className='outline-none' value={priority} onChange={(e) => handlePriorityChange(e)}>
                            <option> High </option>
                            <option> Moderate </option>
                            <option> Low </option>
                        </select>
                        <input type="date" defaultValue={today} onChange={(e) => handleDueDateChange(e)} />
                    </>
                }
                <input type="checkbox" checked={forLater} onChange={(e) => handleForLater(e)} />
                <button className="p-1 bg-white" type="submit"> + </button>
            </form>
        </div>
    )
}

export default memo(TodoCreator);


const mapDispatchToProps = {
    onSubmit: todoCreator
}

export const TodoMaker = connect(undefined, mapDispatchToProps)(TodoCreator);