import Header from './Header'
import { UserMaker } from './UserCreator'
import { UserListComponent } from './UserList'

function Users() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Header />
      <UserMaker />
      <UserListComponent/>
    </div>
  )
}

export default Users