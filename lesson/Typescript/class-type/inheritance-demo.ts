class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`username: ${this.userName}, age: ${this.age}`);
  }
}

class Student extends User {
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(
      `username: ${this.userName}, age: ${this.age}, Student ID: ${this.studentId}`
    );
  }
}

let student1 = new Student("Ruhul", 121, 12);
student1.display();

let user1 = new User("Ruhul Amin", 23);
user1.display();

let user2 = new User("Armina sathy", 21);
user2.display();
