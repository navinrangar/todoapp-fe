import { Route, Routes } from "react-router-dom";
import Todo from "./components/Todo";
import Users from "./components/Users";

const App = () => {
  return (
    <>
      <Routes>
       
        <Route index element={<Todo />} />
        <Route path="/users" element={<Users />} />
      </Routes>

    </>
  )
}

export default App;