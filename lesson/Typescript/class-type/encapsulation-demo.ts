//public, private, protected, readonly
class User {
  public userName: string;
  public age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`username: ${this.userName}, age: ${this.age}`);
  }
}

class Student extends User {
  private studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(
      `username: ${this.userName}, age: ${this.age}, Student ID: ${this.studentId}`
    );
  }

  setStudentId(id: number): void {
    this.studentId = id;
  }

  getStudentId(): number {
    return this.studentId;
  }
}

let student1 = new Student("Ruhul", 21, 121);
student1.setStudentId(121212);
// console.log(student1.getStudentId());
// student1.display();

let user1 = new User("Ruhul", 22);
user1.userName = "sathy";
// console.log(user1);
// user1.display();
