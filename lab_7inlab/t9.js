function egb() {
  const name = document.getElementById("studentName").value;
  const obt = document.getElementById("obt").value;
  const total = document.getElementById("total").value;
  const per = (obt/total)*100;
  {
    if(per>=50)
  { document.getElementById("s").textContent = "eliigible for admission";}
else
   {document.getElementById("s").textContent = " not eliigible for admission"; }
  }
  document.getElementById("n").textContent = "Student Name: " + name;
  document.getElementById("d").textContent = "percentage " + per;

document.getElementById("output").style.display = "block"; 
}