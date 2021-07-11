import React from 'react';

import { Adverts } from '../config/adverts';


const BoopContacts = ({users}) => {

  const hideContacts = (e) => {
    const target = document.getElementById('contacts-menu');
    target.classList.remove('show-contacts');
  };

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
          <div className="new-room"><i className="fa fa-video-camera" aria-hidden="true"></i></div>
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
              <img src={`https://randomuser.me/api/portraits/thumb/women/${user.id}.jpg`} alt="contact"/>
              {user.name}
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
