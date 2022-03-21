import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Profile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const { list: users } = useSelector((state) => state.modules.hrms.users);

  useEffect(() => {
    const u = users.filter((f) => f.id === userId);
    setUser(u[0]);
  }, []);
  return (
    <div className="card shadow-lg pro">
      {user && (
        <>
          <div className="card-header">
            {user.username} - {user.id} - {user.email}
          </div>
          <div className="card-body">{user.name}</div>
          <div className="card-body">
            {user.address.street},{user.address.suite},{user.address.city},
            {user.address.zipcode}{" "}
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
