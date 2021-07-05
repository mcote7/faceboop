import React, { useState } from 'react';

import { MenuItemsA } from '../config/menu';
import {MenuItemsB} from '../config/menu';

const BoopMainMenu = () => {

  const [displayMore, setDisplayMore] = useState(false);
  
  return (
    <div className="boop-main-menu">
      
      <div className="users-cont">
        
        {MenuItemsA && MenuItemsA.map((item, idx) => {
          return(
            <div key={idx} className="user-contact">
              <img src={item.imgSrc} alt="item"/>
              {item.title}
            </div>
          );
        })}
        
        {displayMore && MenuItemsB && MenuItemsB.map((item, idx) => {
          return(
            <div key={idx} className="user-contact">
              <img src={item.imgSrc} alt="item"/>
              {item.title}
            </div>
          );
        })}
      </div>
      
      {!displayMore ?
      <div onClick={()=>setDisplayMore(true)} className="group-cont">
        <div className="group-contact">
          <div><i class="fa fa-chevron-down" aria-hidden="true"></i></div>
          See More
        </div>
      </div>
      :
      <div onClick={()=>setDisplayMore(false)} className="group-cont">
        <div className="group-contact">
          <div><i class="fa fa-chevron-up" aria-hidden="true"></i></div>
          See Less
        </div>
      </div>
      }
      <small className="mt-auto">Faceboop &copy; 2021 | Michael P. Cote</small>
    </div>
  );
};

export default BoopMainMenu;
