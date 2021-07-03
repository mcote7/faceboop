import React from 'react';

import { Adverts } from '../config/adverts';


const BoopContacts = ({users}) => {
  return (
    <div className="boop-contacts">
      <p>Sponsored</p>
      <div className="ad-cont">
        {Adverts && Adverts.map((ad, idx) => {
          return(
            <a 
              key={idx} 
              href={ad.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ad">
              
              <img src={ad.imgSrc} alt="cote"/>
              <div className="ad-text">
                <div>{ad.title}</div>
                <small>{ad.href.substr(8)}</small>
              </div>
            </a>
          );
        })}
      </div>
      <p>Contacts</p>
      <div className="users-cont">
        {users && users.map((user, idx) => {
          return(
            <div className="user-contact">
              {idx % 2 === 0 ? 
                <img src={`https://randomuser.me/api/portraits/thumb/women/${idx}.jpg`} alt="contact"/> :
                <img src={`https://randomuser.me/api/portraits/thumb/men/${idx}.jpg`} alt="contact"/> }
              
              {user.name}
            </div>
          );
        })}
      </div>
      <p>Group Conversations</p>
      <div className="group-cont">
        <div className="group-contact">
          <div><span>+</span></div>
          Create New Group
        </div>
      </div>
    </div>
  );
};

export default BoopContacts;
