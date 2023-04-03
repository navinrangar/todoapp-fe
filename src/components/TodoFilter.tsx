import { memo, useEffect, useState } from "react"
import { connect } from "react-redux";
import { todoDueDateChange, todoPriorityChange } from "../actions/todo";

interface Props {
    onPriorityChange: (priority: string) => void
    onDueDateChange: (dueDate: string) => void
}

const Todo = ({ onPriorityChange, onDueDateChange }: Props) => {
    const today = new Date().toJSON().slice(0,10);

    useEffect(() => {
        onPriorityChange('all');
        onDueDateChange(today);
    })

    const handlePriorityChange = (e: any) => {
        onPriorityChange(e.target.value)
    }

    const handleDueDateChange = (e: any) => {
        onDueDateChange(e.target.value)
    }

    return (
        <div className="flex gap-4">
            <select className='outline-none' onChange={(e) => handlePriorityChange(e)}>
                <option> All </option>
                <option> High </option>
                <option> Moderate </option>
                <option> Low </option>
            </select>
            <input type={"date"} defaultValue={today} onChange={(e) => handleDueDateChange(e)} />
        </div>

    )
}

const mapDispatchToProps = {
    onPriorityChange: todoPriorityChange,
    onDueDateChange: todoDueDateChange
}


export default connect(undefined, mapDispatchToProps)(memo(Todo));