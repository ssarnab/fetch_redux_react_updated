import { useSelector } from "react-redux";

const Users = () => {
  const { list: users, loading } = useSelector(
    (state) => state.modules.hrms.users
  );
  return (
    <div>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <span> {users.length} users found</span>
      )}
    </div>
  );
};

export default Users;
