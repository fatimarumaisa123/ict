function calculate() {
  const name = document.getElementById("productName").value;

  const price = Number(document.getElementById("productPrice").value);
  const quantity = Number(document.getElementById("quantity").value);

  const total = price * quantity;

  document.getElementById("n").textContent = "name: " + name;
  document.getElementById("p").textContent = "price: " + price;
  document.getElementById("q").textContent = "quantity: " + quantity;
  document.getElementById("t").textContent = "Bill: " + total;

  document.getElementById("output").style.display = "block";
}