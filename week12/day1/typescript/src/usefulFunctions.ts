export const data = ["joe", "jenny", "britt"];

interface Student {
  firstName: string;
  lastName: string;
  birthday?: string;
}

interface Teacher {
  firstName: string;
  lastName: string;
  birthday: string;
  position: string;
}

export const Joe: Teacher = {
  firstName: "Joe",
  lastName: "Todd",
  birthday: "12/01/1985",
  position: "teacher",
};

export const Brande: Student = {
  firstName: "Brande",
  lastName: "Gilbert",
  birthday: "10/20/1992",
};

let Harper = "📷";

function sayHelloToAStudent(student: string) {
  console.log("Hello", student);
}

sayHelloToAStudent(Harper);
