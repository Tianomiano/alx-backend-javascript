// Define an interface for a student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
  
// Create first student
const student1: Student = {
    firstName: "Miano",
    lastName: "Patrick",
    age: 20,
    location: "Nakuru",
};

// Create second student
const student2: Student = {
    firstName: "Alice",
    lastName: "millanoi",
    age: 22,
    location: "Nairobi",
};
  
// Create an array containing the two students
const studentsList: Student[] = [student1, student2];
  
// Render a table using Vanilla JavaScript
const table = document.createElement("table");
const tbody = document.createElement("tbody");
  
studentsList.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");
  
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
  
table.appendChild(tbody);
document.body.appendChild(table);