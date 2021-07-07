import React, { useEffect, useState } from 'react';

import { getAllUsers } from './server/api';
import { getAllPost } from './server/api';

import BoopNav from './components/BoopNav';
import BoopContacts from './components/BoopContacts';
import BoopMainMenu from './components/BoopMainMenu';
import BoopFeed from './components/BoopFeed';


const App = () => {
  
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  
  useEffect(()=> {
    getAllUsers().then(res => {
      setUsers(res);
    });
    getAllPost().then(res => {
      setPosts(res);
    });
  },[]);
  
  useEffect(()=> {
    console.log("🤼 users",users)
  },[users]);
  
  useEffect(()=> {
    console.log("🚩 posts",posts)
  },[posts]);
  
  return (
    <div className="faceboop container-fluid">
      <div className="row">
        
        <BoopNav users={users}/>
        
        <BoopMainMenu/>
        
        <BoopFeed users={users} posts={posts}/>
        
        <BoopContacts users={users}/>
        
      </div>
    </div>
  );
};

export default App;
