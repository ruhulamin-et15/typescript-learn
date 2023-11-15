interface IUser {
  id: number;
  name: string;
  age: number;
}

let users: IUser[] = [];

let user1: IUser = {
  id: 1,
  name: "Ruhul Amin",
  age: 24,
};

let user2: IUser = {
  id: 2,
  name: "Sathy",
  age: 21,
};

users.push(user1);
users.push(user2);

const printUserInfo = (user: IUser) => {
  console.log(`userid = ${user.id}, name = ${user.name}, age = ${user.age}`);
};

users.forEach((user) => printUserInfo(user));
