import React, { useEffect, useState } from 'react';
import * as moment from 'moment';
import anonUserImg from '../assets/menuIcons/userAnon1.png';

const BoopFeed = ({users, posts, comments}) => {

  const [loading, setLoading] = useState(true);
  
  useEffect(()=> {
    if(users.length > 0 && posts.length > 0 && comments.length > 0) {
      setTimeout(() => {setLoading(false)});
    }
  },[users,posts,comments]);
  
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
      
      {!loading && posts.map((post, idx)=> {
        return(
          idx < postLimit ?
          <div key={idx} className="boop-post">
            
            <div className="post-user">
              <img src={`https://randomuser.me/api/portraits/thumb/women/${users[post.userId - 1].id}.jpg`} alt="contact"/>
              <div className="user-title">
                {users[post.userId - 1].name}
                <small>{getNewRandDate()} &bull; <i className="fa fa-globe" aria-hidden="true"></i></small>
              </div>
            </div>
            
            <div className="post-desc">
              {post.body}
            </div>
            
            <img src={`https://source.unsplash.com/collection/${idx}/200x200/?space`} alt="post img" />
            
            <div className="post-img-title">
              {post.title}
            </div>
            
            {/* display # of likes & comments */}
            <div className="post-stats">
              {comments && comments.filter(comm => comm.postId === post.id).length} Comments
            </div>
            
            {/* for listing comments */}
            
            {/* {comments && comments
                .filter(comm => comm.postId === post.id)
                .map((comment, idx)=> {
                  return(
                    <div key={idx}>
                      <div>{comment.id}</div>
                    </div>
                  );
                })} */}
            
            {/*  */}
            
            <div className="post-options">
              <button>
                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                Like
              </button>
              <button className="mx-1">
                <i className="fa fa-comment-o" aria-hidden="true"></i>
                Comment
              </button>
              <button>
                <i className="fa fa-share" aria-hidden="true"></i>
                Share
              </button>
            </div>
            
            {/* comments */}
            <div className="comment-input">
              <img src={anonUserImg} alt="anon" />
              <input type="text" placeholder="Write a comment..."/>
            </div>
            
          </div> : ''
        );
      })}
      
      {loading 
        ? <div className="loading-feed mt-5"><i className="fa fa-spinner fa-5x" aria-hidden="true"></i></div>
        
        : <button onClick={()=>showMorePosts()} className="show-more-posts">Show More &darr;</button> }
    </div>
  );
};

export default BoopFeed;
