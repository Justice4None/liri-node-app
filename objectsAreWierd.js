// var obj = {
//   key:1
// }

// var obj2 = obj;

// console.log(obj, obj2);

// obj.key = 'z';

// console.log(obj, obj2);

// var a = 5;
// var b = a;
// a = 6;
// console.log(a, b);

function makePerson(){
  this.name = "Dunn"
}

var newThing1 = new makePerson();
var newThing2 = new makePerson();


console.log(newThing1);
console.log(newThing2);


newThing1.name = "William";

console.log(newThing1);
console.log(newThing2);

function makeThing(){
  this.dunn = "Dunn";
}

var dunn = new makeThing();
console.log("It's me!");