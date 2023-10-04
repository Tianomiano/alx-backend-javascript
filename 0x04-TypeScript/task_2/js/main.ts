// task_5 Advanced types Part 1
interface DirectorInterface {
  workFromHome(): string

  getCoffeeBreak(): string
  
  workDirectorTasks(): string

}

interface TeacherInterface {
  workFromHome(): string

  getCoffeeBreak(): string

  workTeacherTasks(): string
}

export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

export const createEmployee = (salary: number | string): Teacher | Director => Number(salary) < 500 ? new Teacher() : new Director();

console.log(createEmployee(200)); // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee('$500')); // Director

const director = new Director();
console.log(director.workFromHome()); // Working from home

const teacher = new Teacher();
console.log(teacher.workTeacherTasks()); // Getting to work


// task_6 Creating functions specific to employees
export function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director {
  return (employee as Director).workDirectorTasks() !== undefined;
}

export function executeWork(employee: DirectorInterface | TeacherInterface): string {
  let res = undefined;
  (isDirector(employee)) ? res = employee.workDirectorTasks() : res = employee.workTeacherTasks();
  return res;
}

// task_7  String literal types
type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects): string | boolean {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  } else {
    return "Unknown subject";
  }
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
