import React from 'react';
import { postNewUser } from '../server/api';
import { removeUser } from '../server/api';
import { removeUserPost } from '../server/api';
import faker from 'faker';
import self from '../assets/misc/self1.jfif';
import { Adverts } from '../config/adverts';


const BoopContacts = ({users, setUsers, posts, setPosts}) => {

  const hideContacts = (e) => {
    const target = document.getElementById('contacts-menu');
    target.classList.remove('show-contacts');
  };


  const addNewUser = () => {
    if(users.length < 100) {
      let id = users.length + 1;
      let data = {
        "id": id,
        "name": `${faker.name.firstName()} ${faker.name.lastName()}`
      }
      let newUser = postNewUser(users, data);
      setUsers(newUser);
      console.log("new user?", data)
    } else {
      return;
    }
  };

  const removeUserFromList = (id) => {
    if(window.confirm('✋ Removing a contact will also remove all there posts from your feed... \r\n 🤔 Do you want to remove?')) {
      let newPostsList = removeUserPost(posts, id);
      setPosts(newPostsList);
      setTimeout(() => {
        let newUsersList = removeUser(users, id);
        setUsers(newUsersList);
      });
    } else {
      return;
    }
  };

  // const getRandomGender = () => {
  //   let newRand =  Math.floor(Math.random() * 2) + 1;
  //   console.log("new rand 1 | 2", newRand)
  //   if(newRand === 1) {
  //     return 'men';
  //   } else if(newRand === 2) {
  //     return 'women';
  //   }
  // };

  return (
    <div id="contacts-menu" className="boop-contacts">
      
      <div onClick={()=>hideContacts()} className="close-contacts">
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>
      
      <p>Sponsored</p>
      
      <div className="boop-spons-cont">
        {Adverts && Adverts.map((ad, idx) => {
          return(
            <a 
              key={idx} 
              href={ad.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="boop-spons">
              
              <img src={ad.imgSrc} alt="cote"/>
              <div className="boop-spons-text">
                <div>{ad.title}</div>
                <small>{ad.href.substr(8)}</small>
              </div>
            </a>
          );
        })}
      </div>
      
      <div className="contacts-title-row">
        <p>Contacts</p>
        
        <div className="contacts-options">
          <div onClick={()=>addNewUser()} className="new-room"><i className="fa fa-video-camera" aria-hidden="true"></i></div>
          <div className="search-messages"><i className="fa fa-search" aria-hidden="true"></i></div>
          <div className="options">
            <div className="dot"></div>
            <div className="dot" style={{margin: '0 0.15rem'}}></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
      
      <div className="users-cont">
        {users && users.map((user, idx) => {
          return(
            <div key={idx} className="user-contact">
              {user.id === 1 ? 
                <img src={self} alt="contact"/> : 
                <img src={`https://randomuser.me/api/portraits/thumb/women/${user.id}.jpg`} alt="contact"/>}
              {user.name}
              {user.id === 1 ?
              '':
              <div 
                onClick={()=>removeUserFromList(user.id)} 
                className="remove-user"><i className="fa fa-minus-circle" aria-hidden="true"></i></div>}
            </div>
          );
        })}
      </div>
      
      <p>Group Conversations</p>
      
      <div className="group-cont">
        <div className="group-contact">
          <div>
            <span>+</span>
          </div>
          
          Create New Group
        </div>
      </div>
    </div>
  );
};

export default BoopContacts;
