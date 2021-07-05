import React, { useEffect, useState } from 'react';

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

  // 
  
  return (
    <React.Fragment>
      <div className="boop-nav">
        
        <div className="logo">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </div>
        
        <div className="search-faceboop">
          <i className="fa fa-search" aria-hidden="true"></i>
          {/* show modal on focus */}
          <input onFocus={()=>showSearch()} type="text" placeholder="Search Faceboop"/>
        </div>
        
        {/* hamburger menus */}
        <div className="nav-mobile-menus ms-auto">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        
      </div>
      
      {displaySearch ?
        <div className="recent-search">
          
          <div className="search-mod-group">
            {/* hide modal on click */}
            <div onClick={()=>hideSearch()} className="search-back">
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </div>
            <div className="search-faceboop">
              <i className="fa fa-search" aria-hidden="true"></i>
              {/* 🧪 hide modal on blur  */}
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
    </React.Fragment>
  );
};

export default BoopNav;
