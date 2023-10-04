//Task_1 Let's build a Teacher interface
interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
  
    [key: string]: any;
}
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  
// Task_2 Extending the Teacher class
  
interface Directors extends Teacher {
    numberOfReports: number;
}

// Create a Director object
const director1: Directors = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    location: "London",
    numberOfReports: 17,
};


// Task_3 Printing teachers
interface printTeacherFunction {
    (firstName: string, lastName: string ): string;
}
  
const printTeacher: printTeacherFunction = (firstName: string, lastName: string ): string => `${firstName.charAt(0)}. ${lastName}`;

// Task_4 Writing a class
interface classInterface {
    workOnHomework(): string;
    displayName(): string;
}
class StudentClass implements classInterface {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    displayName(): string {
      return this.firstName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
    
}
  