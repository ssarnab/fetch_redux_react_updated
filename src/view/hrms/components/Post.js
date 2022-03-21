import { useState } from "react";
import Profile from "./Profile";
import "./style/Post.css";
const Post = (post) => {
  const { id, userId, title, body } = post.post;
  const [isShown, setIsShown] = useState(false);
  const handleMouseEnter = () => {
    setIsShown(true);
  };
  const handleMouseLeave = () => {
    setIsShown(false);
  };
  return (
    <div
      className="col-sm-6 position-relative post"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card m-1">
        <div className="card-header">
          <span> {title}</span>
          <small>post id = {id}</small>
          <small>userId = {userId}</small>
        </div>
        <small>{body}</small>
      </div>
      {isShown && (
        <div className="profile m-auto" style={{ zIndex: 1 }}>
          <Profile userId={userId}></Profile>
        </div>
      )}
    </div>
  );
};

export default Post;
