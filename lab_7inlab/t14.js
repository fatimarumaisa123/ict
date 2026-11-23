function issue() {
  const student = document.getElementById("studentName").value;
  const title = document.getElementById("bookTitle").value;
  const id = document.getElementById("bookId").value;
  const days = Number(document.getElementById("days").value);
  if (days > 14) {
    document.getElementById("m").textContent = "Please return the book on time";
  } else {
    document.getElementById("m").textContent = "Book issued successfully";
  }
  document.getElementById("s").textContent = "Student Name: " + student;
  document.getElementById("t").textContent = "Book Title: " + title;
  document.getElementById("i").textContent = "Book ID: " + id;
  document.getElementById("d").textContent = "Number of Days: " + days;

  document.getElementById("output").style.display = "block";
}