import { useSelector } from "react-redux";
import Post from "./Post";

const Posts = () => {
  const { list: posts, loading } = useSelector((state) => state.modules.hrms.posts);
  return (
    <div className="row">
      {posts.map((post) => (
        <Post post={post} key={post.id}></Post>
      ))}
    </div>
  );
};
export default Posts;
