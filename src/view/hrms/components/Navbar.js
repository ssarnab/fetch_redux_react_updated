import { useSelector } from "react-redux";

const Navbar = () => {
  const { list: users, loading } = useSelector(
    (state) => state.modules.hrms.users
  );
  return (
    <nav className="bg-dark text-white">
      {users.length > 0 ? users[0].name : "Loading"}
    </nav>
  );
};

export default Navbar;
