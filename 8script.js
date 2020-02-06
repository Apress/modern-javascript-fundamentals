console.log('line 1\n' + 'line 2');
let a = 'Hello';
let b = 'World';
let c = 'with a quote ' + a + '" quoted text \' hello \' ';
console.log(a, b, c);
let d = ` '${a}'
${b}`;
let e = 50;
console.log(d);
console.log(`
<h1>${10*5}</h1>
${e+100}
`);