import React, { useEffect, useState } from 'react';
import anonUserImg from '../assets/menuIcons/userAnon1.png';
import * as moment from 'moment';
import * as _ from 'lodash';
import useRS from "radioactive-state";
import self from '../assets/misc/self1.jfif';

const BoopFeed = ({users, posts, comments}) => {

  const [listLoaded, setListLoaded] = useState(false);

  const state = useRS({
    loading: true,
    postLen: 0,
    postLimit: 4,
    loadingMore: false
  });

  useEffect(()=> {
    if(users.length > 0 && posts.length > 0 && comments.length > 0) {
      state.postLen = posts.length;
      // console.log("post len 1 :::", state.postLen)
      setListLoaded(true);
      setTimeout(() => {state.loading = false});
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[users,posts,comments]);

  useEffect(()=> {
    // console.log("post len 2 :::", state.postLen)
    window.addEventListener('scroll', _.throttle(showMorePosts, 100));
    return window.removeEventListener('scroll', _.throttle(showMorePosts, 100));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[listLoaded]);

  const showMorePosts = () => {
    // let scrollHeight = Math.max(
    //   document.body.scrollHeight, document.documentElement.scrollHeight,
    //   document.body.offsetHeight, document.documentElement.offsetHeight,
    //   document.body.clientHeight, document.documentElement.clientHeight
    // );
    // console.log("limit , p len", state.postLimit, state.postLen);
    // console.log("doc.doc.cliHei", document.documentElement.clientHeight + window.pageYOffset, "doc.bod.offHei", document.body.offsetHeight);
    if((document.documentElement.clientHeight + window.pageYOffset) >= (document.body.offsetHeight - 100)) {
      // console.log("AT BOTTOM!", state.postLimit, state.postLen);
      // console.log("doc.doc.cliHei", document.documentElement.clientHeight + window.pageYOffset, "doc.bod.offHei", document.body.offsetHeight);
      if (state.postLimit + 2 < state.postLen) {
        state.loadingMore = true;
        // 🚧🚧🚧 simulated api delay need to re-factor whole func when database is added 
        setTimeout(() => {
          state.loadingMore = false;
        }, 400);
        setTimeout(() => {
          state.postLimit = state.postLimit + 2;
        }, 401);
      }
    }
  };
  
  // ok 
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
  
  // randoms 
  const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  };
  
  const getNewRandDate = () => {
    const randDate = randomDate(new Date(2012, 0, 1), new Date());
    const target = moment(randDate).format('MMMM D YYYY @ h:mm A');
    return target;
  };

  const getNewToday = () => {
    const now = new Date();
    const target = moment(now).format('MMMM D YYYY @ h:mm A');
    return target;
  };
  
  const getRandomInt = () => {
    return Math.floor(Math.random() * 99);
  };
  // 
  
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
      
      {!state.loading && posts && posts.map((post, idx)=> {
        return(
          idx < state.postLimit ?
          <div key={idx} className="boop-post">
            
            <div className="post-user">
              {post.userId === 1 ? 
                <img src={self} alt="contact"/> : 
                <img src={`https://randomuser.me/api/portraits/thumb/women/${post.userId}.jpg`} alt="contact"/>}
                
              <div className="user-title">
                {users.map(user => {
                  if(user.id === post.userId) {
                    return user.name;
                  } else {
                    return null;
                  }
                })}
                {post.id === 0 ? 
                <small>{getNewToday()} &bull; <i className="fa fa-globe" aria-hidden="true"></i></small>
                :
                <small>{getNewRandDate()} &bull; <i className="fa fa-globe" aria-hidden="true"></i></small>}
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
      {state.loading || state.loadingMore ? 
      <div className="loading-feed mt-5"><i className="fa fa-spinner fa-5x" aria-hidden="true"></i></div> : ''}
    </div>
  );
};

export default BoopFeed;
