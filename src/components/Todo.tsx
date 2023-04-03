import { DoneComponent, ForLaterComponent, PriorityComponent} from "./TodoList";
import { TodoMaker } from "./TodoCreator";
import Header from "./Header";
import TodoFilter from "./TodoFilter";

interface Props {
}

const Todo = () => {

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Header/>
            {/* <TodoComponent/> */}
            <TodoFilter/>
            <PriorityComponent/>
            <TodoMaker />
            <DoneComponent/>
            <ForLaterComponent/>
        </div>

    )
}

export default Todo;