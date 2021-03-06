import React from 'react';
import Posts from "meteor/nova:posts";

const PostsMediaThumbnail = ({ post }) => {
  return (
    <a className="posts-thumbnail" href={Posts.getLink(post)} target={Posts.getLinkTarget(post)}>
      <div className="posts-thumbnail-holder">
        <img src={Posts.getThumbnailUrl(post)} />
        <div className="posts-thumbnail-overlay">
          <i className="fa fa-play-circle" aria-hidden="true"></i>
        </div>
      </div>
    </a>
  );
};

const PostsThumbnail = ({post}) => {
  if (Posts.isRichCard(post)) return <PostsMediaThumbnail post={ post }/>;

  return (
    <a className="posts-thumbnail" href={Posts.getLink(post)} target={Posts.getLinkTarget(post)}>
      <span><img src={Posts.getThumbnailUrl(post)} /></span>
    </a>
  )
}

PostsThumbnail.displayName = "PostsThumbnail";

module.exports = PostsThumbnail;
export default PostsThumbnail;
