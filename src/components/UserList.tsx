import { Link } from "react-router-dom";
const users = [
  {
    id: "1",
    name: "Mustafa",
  },
  {
    id: "2",
    name: "Qasim",
  },
  {
    id: "3",
    name: "Yusuf",
  },
  {
    id: "4",
    name: "Zamman",
  },
];
function UserList(){
    return (
      <div>
        <h2> User List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/ ${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
}
export default UserList;