console.log("Hello");

import fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((users) => {
//     console.log(users);
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((data) => data.json())
//       .then((post) => console.log(post));
//   });

// async function getData() {
//   const post1 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   ).json();
//   const post2 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/2")
//   ).json();

//   console.log(post1);
//   console.log(post2);
// }

// getData();

//anonim function
// (() => console.log("Selam"))();

import axios from "axios";

// async function getData() {
//   const { data: post1 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );
//   const { data: post2 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/2"
//   );

//   console.log(post1);
//   console.log(post2);
// }

// getData();

const getPost1 = () => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    resolve(data);
  });
};

const getPost2 = () => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts/2"
    );
    // resolve(data);
    reject("Bir sorun oluştu!");
  });
};

// (async () => {
//   try {
//     const post1 = await getPost1();
//     const post2 = await getPost2();

//     console.log(post1);
//     console.log(post2);
//   } catch (e) {
//     console.log(e);
//   }
// })();

Promise.all([getPost1(), getPost2()]).then(console.log).catch(console.log);

//Array Functions
/*
    push
    map
    find
    filter
    some
    every
    includes
*/
