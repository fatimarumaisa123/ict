function registerStudent() {
  const name = document.getElementById("studentName").value;
  const rollNo = document.getElementById("rollNumber").value;
  const department = document.getElementById("department").value;
  const semester = document.getElementById("semester").value;

  document.getElementById("n").textContent = "Student Name: " + name;
  document.getElementById("r").textContent = "Roll Number: " + rollNo;
  document.getElementById("d").textContent = "Department: " + department;
  document.getElementById("s").textContent = "Semester: " + semester;

  document.getElementById("output").display = "block";
}