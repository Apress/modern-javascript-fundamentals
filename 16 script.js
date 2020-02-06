function counter(val){
    //console.log(val);
    if(val >= 10){
     return;   
    }
    counter(val +1);
}

counter(0);

function doubleAdder(a,b){
    function add(x){
        console.log(x);
        return x + x;   
    }
    return add(a) + add(b);
}

console.log(doubleAdder(3,4));


function multiply(a=5,b=7){
    //b = b || 10;
    return a * b;
}
console.log(multiply());

const adder = function(a,b){
    return a + b;
}
console.log(adder(4,6));

const adder1 = (a,b) => a + b;

console.log(adder1(4,6));









