//loops



//arrays


//object literal
let student1 = {
    name: "jesse",
    email:  "jesse@gmail.com",
    grade101:3.5,
    grade102:3.8,
}
let student2 = {
    name: "luke",
    email:  "luke@gmail.com",
    grade101:3.5,
    grade102:3.8,
}
let student3 = {
    name: "alex",
    email:  "alex@gmail.com",
    grade101:3.5,
    grade102:3.8,
}

console,log(student1);
console,log(student2.grade101);
console,log(student3.grade102);

console.log(student1.grade101 + student2.grade101 + student3.grade101);

//display the sum of all the grades of the unit 101

function getSum(){
    for(let i=0;i<10;i++){
        document.write(students[i].grade101)
    }
}
getSum();

let myArray = ["Hello cohort 46",true,10,5,7.6,null,undefined];
console.table(myArray);

console.log(myArray.length);

myArray[3]="new value"


console.table(myArray);