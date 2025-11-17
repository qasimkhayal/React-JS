import './UserInfo.css'
type User = {
  name: string;
  emailId: string;
  country: string;
  userId: string;
};
function UserInfo() {
  let user1: User = {
    name: "Mustafa",
    emailId: " Jabali@gmail.com",
    country: "Sudan",
    userId: "1p438",
  };
  return (
    <div className="card 1">
      <h2>{user1.name}</h2>
      <p>{user1.emailId}</p>
      <p>{user1.country}</p>
      <p>{user1.userId}</p>
    </div>
  );
}
export default UserInfo;
