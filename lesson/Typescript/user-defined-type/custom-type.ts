type User = { userName: string; userId: number };

let users: User[];
users = [];

let user1: User;
user1 = { userName: "ruhul", userId: 121 };
users.push(user1);

let user2: User;
user2 = { userName: "sathy", userId: 122 };
users.push(user2);

let user3: User;
user3 = { userName: "armina", userId: 123 };
users.push(user3);

console.log(users);

type RequestType = "GET" | "POST";
let getRequest: RequestType;
getRequest = "GET";

function requestHandler(requestType: RequestType) {
  console.log(requestType);
}
requestHandler("GET");
