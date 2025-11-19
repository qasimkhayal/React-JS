import { useState } from "react";

type User = {
  name: string;
  userName: string;
  email: string;
  adress: string;
  companyName: string;
};
function UserList() {
  let [users, setUsers] = useState<User[]>([]);
  const fetchUser = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let id = await response.json();
    setUsers(id);
  };
  return (
    <div className="container mb-3">
      <h2 className="text-dark bold">user List</h2>
      <button className="btn btn-danger" onClick={fetchUser}>
        Fetch User
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li className="list-group-item">
            key {user.userName}
            <h4 className="text-danger">{user.name}</h4>
            <p className="text-italic">{user.email}</p>
            <p className="text-italic">{user.adress}</p>
            <p className="text-italic">{user.companyName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UserList;