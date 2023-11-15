var users = [];
var user1 = {
    id: 1,
    name: "Ruhul Amin",
    age: 24,
};
var user2 = {
    id: 2,
    name: "Sathy",
    age: 21,
};
users.push(user1);
users.push(user2);
var printUserInfo = function (user) {
    console.log("userid = ".concat(user.id, ", name = ").concat(user.name, ", age = ").concat(user.age));
};
users.forEach(function (user) { return printUserInfo(user); });
