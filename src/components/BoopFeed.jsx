import React from 'react';

const BoopFeed = () => {

  return (
    <div className="boop-feed">
      
      <div className="post-form">
        <div className="post-input">
          <i class="fa fa-user-circle-o" aria-hidden="true"></i>
          <input type="text" />
        </div>
        <hr />
        <div className="post-buttons">
          <button>
            <i class="fa fa-video-camera" aria-hidden="true"></i>
            Live Video
          </button>
          <button>
            <i class="fa fa-picture-o" aria-hidden="true"></i>
            Photo/Video
          </button>
          <button>
            <i class="fa fa-smile-o" aria-hidden="true"></i>
            Feeling/Activity
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default BoopFeed;
