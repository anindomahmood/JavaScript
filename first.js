alert("welcome to JavaScript");
console.log("Hello World");

name="John Doe";
console.log("My name is " + name);

age=24;
console.log("My age is " + age);

x=null;
console.log("The value of x is " + x);

y=undefined;
console.log("The value of y is " + y);

booleanValue=true;
console.log("I am Follow the trend - " + booleanValue);

a=prompt("Please enter your name: ");
console.log("The name you entered is " + a);

let m=15;
if(m>10){
    console.log("m is greater than 10");
}

class Student {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
}

let student1=new Student("Anindo", 25, 55004);
console.log("Student Name: " + student1.name);
console.log("Student Age: " + student1.age);
console.log("Student ID: " + student1.id);

let student2 =
{
    name:prompt("Enter student name: "),
    age:parseInt(prompt("Enter student age: ")),
    id:parseInt(prompt("Enter student ID: "))
}
console.log("Student Name: " + student2.name);
console.log("Student Age: " + student2.age);
console.log("Student ID: " + student2.id);

const num1=10;
const num2=10;

console.log("Sum: ", num1+num2);

const num3="10";
const num4=10;

console.log("Adding String: ", num3+num4);

const num5=10;
const num6="20";

console.log("Exception: ", num5-num6);