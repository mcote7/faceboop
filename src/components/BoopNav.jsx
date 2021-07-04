import React, { useState } from 'react';

const BoopNav = () => {

  const [displaySearch, setDisplaySearch] = useState(true);
  
  // const showSearch = () => {
  //   setDisplaySearch(true);
  // };
  
  // const hideSearch = () => {
  //   setDisplaySearch(false);
  // };
  
  return (
    <React.Fragment>
      <div className="boop-nav">
        
        <div className="logo">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </div>
        
        <div className="search-faceboop">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input type="text" placeholder="Search Faceboop"/>
        </div>
        
      </div>
      
      {displaySearch ?
        <div className="recent-search">
          
          <div className="search-mod-group">
            <div className="search-back">
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </div>
            <div className="search-faceboop">
              <i className="fa fa-search" aria-hidden="true"></i>
              <input autoFocus type="text" placeholder="Search Faceboop"/>
            </div>
          </div>
          
          No recent searches
        </div>
        
      :''}
    </React.Fragment>
  );
};

export default BoopNav;