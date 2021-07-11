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
  
  const toggleShowComments = (idx) => {
    let postComments = document.getElementById(`commentBox${idx}`);
    postComments.classList.toggle('show-comments');
  };
  
  const showComments = (idx) => {
    let postComments = document.getElementById(`commentBox${idx}`);
    postComments.classList.add('show-comments');
  };
  
  const toggleShowCommentInput = (idx) => {
    let postInput = document.getElementById(`commentInput${idx}`);
    postInput.classList.toggle('hide-comment-input');
  }
  
  const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  };
  
  const getNewRandDate = () => {
    const randDate = randomDate(new Date(2012, 0, 1), new Date());
    const target = moment(randDate).format('MMMM D YYYY @ h:mm A');
    return target;
  };
  
  const getRandomInt = () => {
    return Math.floor(Math.random() * 101);
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
              <div className="post-responses">
                <div className="show-loves">
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </div>
                <div className="show-likes ms-1">
                  <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                </div>
                <div className="show-emoji ms-1">
                  {/*  */}
                </div>
              </div>
              <div onClick={()=>toggleShowComments(idx)} className="show-comments">
                {comments && comments.filter(comm => comm.postId === post.id).length} Comments
              </div>
            </div>
            
            <div className="post-options">
              <button>
                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                Like
              </button>
              <button onClick={()=>toggleShowCommentInput(idx)} className="mx-1">
                <i className="fa fa-comment-o" aria-hidden="true"></i>
                Comment
              </button>
              <button>
                <i className="fa fa-share" aria-hidden="true"></i>
                Share
              </button>
            </div>
            
            {/* comments */}
            <div id={`commentInput${idx}`} className="comment-input">
              <img src={anonUserImg} alt="anon" />
              <input type="text" onFocus={()=>showComments(idx)} placeholder="Write a comment..."/>
            </div>
            
            <div id={`commentBox${idx}`} className="comment-box">
            {comments && comments
                .filter(comm => comm.postId === post.id)
                .map((comment, idx)=> {
                  return(
                    <div key={idx} className="my-1">
                      
                      <div className="comment-user">
                        {idx % 2 === 0 ? 
                          <img src={`https://randomuser.me/api/portraits/thumb/women/${getRandomInt()}.jpg`} alt="user"/>
                          : 
                          <img src={`https://randomuser.me/api/portraits/thumb/men/${getRandomInt()}.jpg`} alt="user"/>
                        }
                      </div>
                      
                      {/* fix here comment name | body */}
                      <div className="comment-body">
                        <small>{comment.email}</small>
                        {idx % 2 === 0 ?
                          <div className="comment-comment">
                            {comment.name}
                          </div>
                          :
                          <div className="comment-comment">
                            {comment.body}
                          </div>
                        }
                      </div>
                      
                    </div>
                  );
                })}
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
