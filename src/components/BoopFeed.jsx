import React, { useState } from 'react';

import anonUserImg from '../assets/menuIcons/userAnon1.png';

const BoopFeed = ({users, posts}) => {

  const [postLimit, setPostLimit] = useState(6);

  const showMorePosts = () => {
    setPostLimit(postLimit + 6);
  };

  return (
    <div className="boop-feed mx-auto">
      
      <div className="post-form">
        <div className="post-input">
          <img src={anonUserImg} alt="anon" />
          <button>Whats on your mind, Anonymous?</button>
        </div>
        <hr />
        <div className="post-buttons">
          <button>
            <i className="fa fa-video-camera" aria-hidden="true"></i>
            Live Video
          </button>
          <button>
            <i className="fa fa-picture-o" aria-hidden="true"></i>
            Photo/Video
          </button>
          <button>
            <i className="fa fa-smile-o" aria-hidden="true"></i>
            Feeling/Activity
          </button>
        </div>
      </div>
      
      {posts && posts.map((post, idx)=> {
        return(
          idx < postLimit ?
          <div key={idx} className="boop-post">
            
            <div className="post-user">
              <img src={`https://randomuser.me/api/portraits/thumb/women/${users[post.userId].id}.jpg`} alt="contact"/>
              {users[post.userId].name}
            </div>
            
            <img src={`https://source.unsplash.com/collection/${idx}/200x200/?space`} alt="post img" />
            
            {post.title}
            
          </div> : ''
        );
      })}
      
      <button onClick={()=>showMorePosts()} className="show-more-posts">Show More &darr;</button>
    </div>
  );
};

export default BoopFeed;
