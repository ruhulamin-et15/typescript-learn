var userInfo1;
var userInfo2;
var userInfo3;
userInfo1 = function () {
    console.log("Ruhul Amin is 27 years old");
};
userInfo2 = function (name) {
    console.log("".concat(name, " is 27 years old"));
};
userInfo3 = function (name, age) {
    return "".concat(name, " is ").concat(age, " years old");
};
userInfo1();
userInfo2("Ruhul Amin");
console.log(userInfo3("Ruhul Amin", 24));
