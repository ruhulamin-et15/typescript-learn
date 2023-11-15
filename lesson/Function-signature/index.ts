let userInfo1: () => void;
let userInfo2: (name: string) => void;
let userInfo3: (name: string, age: number) => string;

userInfo1 = () => {
  console.log("Ruhul Amin is 27 years old");
};
userInfo2 = (name: string) => {
  console.log(`${name} is 27 years old`);
};
userInfo3 = (name: string, age: number) => {
  return `${name} is ${age} years old`;
};
userInfo1();
userInfo2("Ruhul Amin");
console.log(userInfo3("Ruhul Amin", 24));
