function login() {
  const name = document.getElementById("name").value;
  const rollNo = document.getElementById("num").value;

  localStorage.setItem("studentName", name);
  localStorage.setItem("rollNumber", rollNo);

  window.location.href = "t12dashboard.html";
}