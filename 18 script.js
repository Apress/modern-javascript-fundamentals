const myObj = {
    make: 'Ford'
    , model: 'Mustang'
    , color: 'blue'
    , year: 2013
}
console.log(myObj);
for (prop in myObj) {
    console.log(prop, myObj[prop]);
}
console.log(Object.values(myObj));
let temp = Object.values(myObj);
temp.forEach(function (val, index) {
    console.log(val, index);
})