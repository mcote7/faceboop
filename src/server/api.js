
// https://my-json-server.typicode.com/mcote7/faceboop_server/users
export const getAllUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET'})
    .then(res => res.json())
    .then(data => {return data})
    .catch(err => console.log("error getting users", err));
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
