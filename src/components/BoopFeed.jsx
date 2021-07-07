import React, { useState } from 'react';

import * as moment from 'moment';

import anonUserImg from '../assets/menuIcons/userAnon1.png';

const BoopFeed = ({users, posts}) => {

  const [postLimit, setPostLimit] = useState(6);

  const showMorePosts = () => {
    setPostLimit(postLimit + 6);
  };

  const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  };

  const getNewRandDate = () => {
    const randDate = randomDate(new Date(2012, 0, 1), new Date());
    const target = moment(randDate).format('MMMM D YYYY @ h:mm A');
    return target;
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
              <div className="user-title">
                {users[post.userId].name}
                <small>{getNewRandDate()} &bull; <i className="fa fa-globe" aria-hidden="true"></i></small>
              </div>
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
