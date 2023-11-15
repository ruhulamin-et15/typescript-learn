const printUserInfo = <X, Y>(userId: X, userAge: Y) => {
  console.log(`ID: ${userId}, Age: ${userAge}`);
};

printUserInfo("101", 27);
printUserInfo(101, "27");
printUserInfo("101", "27");
