interface IUserFormatter {
  formateUser: () => string;
}

class User implements IUserFormatter {
  constructor(private fullName: string, private age: number) {}

  formateUser = () => {
    return `name: ${this.fullName}, age: ${this.age}`;
  };
}

let user = new User("Mr.Rahim", 22);
console.log(user.formateUser());
