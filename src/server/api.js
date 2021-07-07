
export const getAllUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET'})
    .then(res => res.json())
    .then(data => {
      return data;
    });
};

export const getAllPost = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'})
  .then(res => res.json())
  .then(data => {
    return data;
  });
};