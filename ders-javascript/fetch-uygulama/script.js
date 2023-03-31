fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((json) => json.forEach((item) => console.log(item.email)))
  .catch((err) => console.log(err));
