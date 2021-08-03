
// https://jsonplaceholder.typicode.com/users
export const getAllUsers = () => {
  return fetch('https://my-json-server.typicode.com/mcote7/faceboop_server/users', {method: 'GET'})
    .then(res => res.json())
    .then(data => {return data})
    .catch(err => console.log("error getting users", err));
};

export const postNewUser  = (initialState, data) => {
  return [...initialState, data];
};

export const removeUser = (initialState, id) => {
  return initialState.filter(user => user.id !== id);
};

export const removeUserPost = (initialState, id) => {
  return initialState.filter(post => post.userId !== id);
};

export const getAllPost = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'})
  .then(res => res.json())
  .then(data => {return data})
  .catch(err => console.log("error getting posts", err));
};

export const getAllComments = () => {
  return fetch('https://jsonplaceholder.typicode.com/comments', {method: 'GET'})
  .then(res => res.json())
  .then(data => {return data})
  .catch(err => console.log("error getting comments", err));
};
