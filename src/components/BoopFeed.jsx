import React from 'react';

import anonUserImg from '../assets/menuIcons/userAnon1.png';

const BoopFeed = () => {

  return (
    <div className="boop-feed">
      
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
      
    </div>
  );
};

export default BoopFeed;
