//import configureStore from "./store/configureStore";
import { loadUsers } from "./store/modules/hrms/users";
import posts, { loadPosts } from "./store/modules/hrms/posts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Users from "./view/hrms/components/Users";
import Navbar from "./view/hrms/components/Navbar";
import Posts from "./view/hrms/components/Posts";
function App() {
  //
  // const store = configureStore();
  // store.dispatch(loadUsers());
  // store.dispatch(loadPosts());
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  useEffect(() => {
    dispatch(loadPosts());
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Users />
      {<Posts />}
    </div>
  );
}

export default App;
