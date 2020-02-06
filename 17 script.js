const myObj = {greet:'WORLD'};
myObj.greet = 'hello';
myObj.greet2 = 'World';
myObj.greet = 500;
console.log(myObj.greet + ' ' + myObj.greet2);

const car = {
    make : 'Car',
    model : 'Mustang',
    color: 'red',
    year : 2013,
    drive : function(){
     console.log('driving ' +this.model + ' car')
    },
    myArr : [1,2,3]
}

console.log(car.make);
console.log(car['make']);

const car2 = car;
console.log(car2);
car2.color = 'blue';
console.log(car);

const car3 = Object.assign({},car);
console.log(car3);
car.color = 'green';
console.log(car3);









