import { ChangeEvent, FormEvent, FormEventHandler, memo, useState } from "react";
import { connect } from "react-redux";
import { todoEdit } from "../actions/todo";
import { Todo } from "../models/todo";

interface Props {
    todoToEdit: Todo
    onEditSubmit: (id: number, name: string, priority: string, due_date: string) => void
    setFormClose: Function
}

const TodoEditor = ({ onEditSubmit, todoToEdit, setFormClose }: Props) => {

    const { id, name, priority, dueDate } = todoToEdit;

    const [newName, setNewName] = useState<string>(name);
    const [newPriority, setNewPriority] = useState<string>(priority);
    const [newDueDate, setNewDueDate] = useState<string>(dueDate);


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value)
    }

    const handlePriorityChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setNewPriority(e.target.value);
    }

    const handleDueDateChange = (e: any) => {
        setNewDueDate(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            onEditSubmit(id, newName, newPriority, newDueDate);
            setFormClose(false);
    }


    return (
        <div className="inline-block border-1 outline">
            <form
                onSubmit={(e) => handleSubmit(e)}
            >
                <input className="outline-none" type="text" value={newName} onChange={(e) => handleChange(e)} />
                <select className='outline-none' value={newPriority} onChange={(e) => handlePriorityChange(e)}>
                    <option> High </option>
                    <option> Moderate </option>
                    <option> Low </option>
                </select>
                <input type={"date"} value={newDueDate} onChange={(e) => handleDueDateChange(e)} />
                <button className="p-1 bg-white" type="submit"> + </button>
            </form>
        </div>
    )
}


const mapDispatchToProps = {
    onEditSubmit: todoEdit
}

export default connect(undefined, mapDispatchToProps)(memo(TodoEditor));