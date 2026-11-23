const student = {
  name: "Ali",
  rollNo: "25K-1234",
  marks: [85, 78, 92]
};

// Dot notation
console.log(student.name);

// Bracket notation 
console.log(student["rollNo"]);

// Bracket notation using a variable that holds the property name
const key = "rollNo";
console.log(student[key]);
student.marks[1] = 80;
student.grade = "A";
console.log(student);
//trying to assign a completely new ibj to student
try {
  student = {
    name: "Sara",
    rollNo: "25K-5678",
    marks: [70, 75, 80]
  };
} catch (error) {
  //Error: Assignment to constant variable.
  console.log("Error: " + error.message);
}

// EXPLANATION
// const does not freeze the object,it only stops the variable name
// from pointing to a different object. Changing a property or adding a new
// one edits the same object, so it is allowed. Assigning a new object would
// make the variable point to a different object, and const does not allow that.