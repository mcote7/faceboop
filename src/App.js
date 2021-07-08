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
      shuffleArray(res);
      setPosts(res);
    });
  },[]);
  
  useEffect(()=> {
    console.log("🤼 users",users)
  },[users]);
  
  useEffect(()=> {
    console.log("🎈 posts", posts)
  },[posts]);
  
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (array.length));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
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
