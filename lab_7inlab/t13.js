function calculate() {
  const name = document.getElementById("empName").value;
  const basic = Number(document.getElementById("basic").value);
  const allowance = Number(document.getElementById("allowance").value);
  const gross = basic + allowance;
  if (gross > 50000) {
    document.getElementById("c").textContent = "High Salary Category";
  } else {
    document.getElementById("c").textContent = "Normal Salary Category";
  }
  document.getElementById("n").textContent = "Employee Name: " + name;
  document.getElementById("b").textContent = "Basic Salary: Rs. " + basic;
  document.getElementById("a").textContent = "Allowance: Rs. " + allowance;
  document.getElementById("g").textContent = "Gross Salary: Rs. " + gross;

  document.getElementById("output").style.display = "block";
}