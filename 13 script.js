let age = 25;
let drink = (age > 21) ? 'Beer' : 'Juice';
let status = (age > 18) ? 'Adult' : 'Minor';
console.log(drink);

console.log(`The guest is ${age} so they are a ${status} and get a ${drink}`);
let user = "Jane";
const friends = ["Larry","Bob","Joe"];
let isFriend = friends.indexOf(user) != -1 ? 'Friend' : 'Unknown';