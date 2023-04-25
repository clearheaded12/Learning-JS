//old way
function myPerson(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
}
//creating new instances of person object
let person1 = new myPerson("Mikail", "Litvin");
let person2 = new myPerson("Elza", "Dorenn");

console.log(person1.first_name);
console.log(`${person2.first_name} ${person2.last_name}`);
