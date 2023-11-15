var users;
users = [];
var user1;
user1 = { userName: "ruhul", userId: 121 };
users.push(user1);
var user2;
user2 = { userName: "sathy", userId: 122 };
users.push(user2);
var user3;
user3 = { userName: "armina", userId: 123 };
users.push(user3);
console.log(users);
var getRequest;
getRequest = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
