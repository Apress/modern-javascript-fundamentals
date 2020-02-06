let friends = ['Larry','Jim','Kim','Joe','Lisa'];
console.log(friends.toString());
let val = friends.join('-*-');
friends.push('Mike');
friends.push('Jane');

let last = friends.pop();
let first = friends.shift();
friends.unshift('Bob');

let middle = friends.splice(2,2,'Jack','Jill');

let firstItem = friends.splice(0,1);
let myArr = [1,2,3];

let nArray = friends.concat(myArr);

console.log(friends.includes('Jimbo'));

console.log(friends.indexOf('Lisa'));
console.log(friends.indexOf('Jimbo'));







            

