import { Route, Routes } from "react-router-dom";
import Todo from "./components/Todo";
import { SignupPage } from "./components/auth/SignUp";
import { SignInPage } from "./components/auth/SignIn";
import { memo } from "react";
import { connect } from "react-redux";
import { loggedInUserSelector, userStateSelector } from "./selectors/todo";
import { State } from "./store";
import { UserState } from "./reducers/user";


interface Props {
  loggedInUser: UserState
}

const AppWithoutProps = ({ loggedInUser }: Props) => {

  return (
    <>
      <Routes>
        {loggedInUser.status ?
          <Route index element={<Todo />} /> : < Route index element={<SignInPage />} />
        }
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  )
}

export default AppWithoutProps;

const mapStateToProps = (s: State) => {
  return {
    loggedInUser: loggedInUserSelector(s)
  }
}

export const App = connect(mapStateToProps, undefined)(memo(AppWithoutProps))

