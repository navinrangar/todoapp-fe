import React, { ChangeEvent, memo } from 'react'
import { connect } from 'react-redux';
import { userAdd } from '../actions/users';

type UserCreatorProps  = {
    onSubmit: (username: string) => void;
}

const UserCreator = ({onSubmit} : UserCreatorProps) => {

    const [username, setUsername] = React.useState<string>('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handleSubmit = () => {
        if (username){
       //dispatch(addTodoAction);
        onSubmit(username);
        setUsername('');
        }
    }


    return (
        <div className="border-1 outline my-4 inline">
            <input className="outline-none" type="text" value={username} onChange={(e) => handleChange(e)} />
            <button className="p-1 bg-white" type="submit" onClick={() => handleSubmit()}> + </button>
        </div>
    )
}

export default memo(UserCreator);


const mapDispatchToProps = {
    onSubmit: userAdd
}

export const UserMaker = connect(undefined, mapDispatchToProps)(UserCreator);