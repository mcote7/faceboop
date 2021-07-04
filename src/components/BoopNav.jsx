import React from 'react';

const BoopNav = () => {
  return (
    <div className="col boop-nav">
      <span className="logo">
        <i className="fa fa-facebook" aria-hidden="true"></i>
      </span>
      <span className="search-faceboop">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input type="text" placeholder="Search Faceboop"/>
      </span>
    </div>
  );
};

export default BoopNav;