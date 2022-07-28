import "./styles/Users.css";
import ScrollButton from "../home/ScrollButton";
import UserList from "./UserList";
import FilterUsers from "./FilterUsers";

function Users() {
  return (
    <div className="container-page-users">
      <ScrollButton />
      <div className="tilte-userspage">
        <h1 className="tilte-users-page">Les utilisateurs</h1>
      </div>
      <div className="subtilte-userspage">
        <h1 className="subtilteuserspage">Les utilisateurs DEAR</h1>
      </div>
      <div className="filter-search-users">
        <FilterUsers />
      </div>
      <div className="users-list" />
      <div className="users-list-test">
        <UserList />
      </div>
    </div>
  );
}

export default Users;
