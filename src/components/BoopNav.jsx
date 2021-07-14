import React, { useEffect, useState } from 'react';
import anonUserImg from '../assets/menuIcons/userAnon1.png';
import mainImg from '../assets/misc/mainMenu.png';
import contactsImg from '../assets/misc/contacts.png';

const BoopNav = ({users}) => {
  
  const [displaySearch, setDisplaySearch] = useState(false);
  
  const showSearch = () => {
    setDisplaySearch(true);
  };
  
  const hideSearch = () => {
    setDisplaySearch(false);
    setSearchUsersResult([]);
  };
  
  const [searchUsersResult, setSearchUsersResult] = useState([]);
  
  const searchUsers = (e) => {
    let result = [];
    let query = e.target.value;
    if(e.target.value !== '') {
      users.filter((user) => {
        if(user.name.toUpperCase().includes(query.toUpperCase())) {
          result.push(user);
        }
        return result;
      })
      setSearchUsersResult(result);
    } else {
      setSearchUsersResult([]);
    }
  };
  
  useEffect(()=> {
    console.log("search results?", searchUsersResult)
  }, [searchUsersResult]);
  
  const [displayMenus, setDisplayMenus] = useState(false);
  
  const showMenus = () => {
    setDisplayMenus(true);
  };
  
  const hideMenus = () => {
    setDisplayMenus(false);
  };
  
  const showMainMenu = () => {
    const target = document.getElementById('main-menu');
    target.classList.add('show-main');
    hideMenus();
  };
  
  const showContacts = () => {
    const target = document.getElementById('contacts-menu');
    target.classList.add('show-contacts');
    hideMenus();
  };
  
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
  
  
  return (
    <React.Fragment>
      <div className="boop-nav">
        
        <div onClick={()=>scrollToTop()} className="logo">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </div>
        
        <div className="search-faceboop">
          <i className="fa fa-search" aria-hidden="true"></i>
          {/* show modal on focus */}
          <input onFocus={()=>showSearch()} type="text" placeholder="Search Faceboop"/>
        </div>
        
        {/* center section */}
        <div className="home-link">
          <i className="fa fa-home" aria-hidden="true"></i>
        </div>
        {/* end center section */}
        
        {/* right nav section */}
        <div className="right-nav-section">
          {/* user img/name */}
          <div className="nav-user">
            <img src={anonUserImg} alt="user"/>
            Anonymous
          </div>
          
          {/* other round links */}
          <div className="other-nav-links">
            <i className="fa fa-star" aria-hidden="true"></i>
          </div>
          
          <div className="other-nav-links">
            <i className="fa fa-commenting" aria-hidden="true"></i>
          </div>
          
          {/* notifications */}
          <div className="notification-bell">
            <i className="fa fa-bell" aria-hidden="true"></i>
          </div>
          
          <div className="other-nav-links me-1">
            <i className="fa fa-caret-down" aria-hidden="true"></i>
          </div>
        </div>
        {/* end right section */}
        
        {/* mobile hamburger menu */}
        <div onClick={()=>showMenus()} className="nav-mobile-menus">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        
      </div>
      {/* end nav bar */}
      
      {/* search modal */}
      {displaySearch ?
        <div className="recent-search">
          
          <div className="search-mod-group">
            {/* hide modal on click */}
            <div onClick={()=>hideSearch()} className="search-back">
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </div>
            <div className="search-faceboop">
              <i className="fa fa-search" aria-hidden="true"></i>
              {/* hide modal on blur  */}
              <input autoFocus onChange={(e)=>searchUsers(e)} onBlur={()=>hideSearch()} type="text" placeholder="Search Faceboop"/>
            </div>
          </div>
          
          {searchUsersResult && searchUsersResult.length > 0 ? 
            searchUsersResult.map((user, idx)=> {
              return(
                <div key={idx} className="user-contact">
                  <img src={`https://randomuser.me/api/portraits/thumb/women/${user.id}.jpg`} alt="contact"/>
                  {user.name}
                </div>
              );
            })
          : <div className="mt-auto mb-2">No recent searches</div>}
        </div>
      :''}
      
      {/* hamburger menu modal */}
      {displayMenus ?
        <div className="menu-menu">
          
          <div onClick={()=>hideMenus()} className="search-back">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </div>
          
          <div onClick={()=>showMainMenu()} className="main-menu-link">
            <img src={mainImg} alt="main"/>
            Main Menu
          </div>
          
          <div onClick={()=>showContacts()} className="contacts-link">
            <img src={contactsImg} alt="contact"/>
            Contacts
          </div>
          
        </div>
      :''}
    </React.Fragment>
  );
};

export default BoopNav;
