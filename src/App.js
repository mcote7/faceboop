import React, { useEffect, useState } from 'react';

import { getAllUsers } from './server/api';

import BoopNav from './components/BoopNav';
import BoopContacts from './components/BoopContacts';
import BoopMainMenu from './components/BoopMainMenu';


const App = () => {
  
  const [users, setUsers] = useState([]);
  
  useEffect(()=> {
    getAllUsers().then(res => {
      setUsers(res);
    });
  },[]);
  
  useEffect(()=> {
    console.log("users",users)
  },[users]);
  
  return (
    <div className="faceboop container-fluid">
      <div className="row">
        
        <BoopNav users={users}/>
        
        <BoopMainMenu/>
        
        <BoopContacts users={users}/>
        
      </div>
    </div>
  );
};

export default App;
