// for (let i = 20; i<41; i++) {
//     console.log(i);
// }
// for (let i = 0; i<50; i++) {
//     if(i%2 !=0) {
//         console.log(i);
//     }
// }

const person = [
    {
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
    },
    {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
    }
];

const otuzYearPerson = person.filter(item => item.age > 30);
console.log(otuzYearPerson);

const JSPerson = person.filter(item => item.languages.includes("JavaScript"))
console.log(JSPerson); 