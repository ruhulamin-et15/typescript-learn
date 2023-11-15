//built in data type: number, string, boolean, void, undefined, null

let userID: number;
let fullName: string;
let firstName: string;
let lastName: string;
let isActivated: boolean;

userID = 121;
firstName = "Ruhul" ;
lastName = " Amin";
isActivated = true;
fullName = firstName.concat(lastName)

console.log(`Your ID = ${userID}, Your Name = ${fullName}, Admin = ${isActivated}`)

console.log(fullName.split(" "))
console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())


function display(): void {
    console.log("Hi i am display");
}
display();