//built in data type: number, string, boolean, void, undefined, null
var userID;
var fullName;
var firstName;
var lastName;
var isActivated;
userID = 121;
firstName = "Ruhul";
lastName = " Amin";
isActivated = true;
fullName = firstName.concat(lastName);
console.log("Your ID = ".concat(userID, ", Your Name = ").concat(fullName, ", Admin = ").concat(isActivated));
console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
function display() {
    console.log("Hi i am display");
}
display();
