function order() {
  const name = document.getElementById("cn").value;
  const item = document.getElementById("fi").value;
  const price = Number(document.getElementById("pr").value);
  const quantity = Number(document.getElementById("qt").value);

  const total = price*quantity;
  if (t>2000) {
    document.getElementById("d").textContent = "You are eligible for a discount";
  } else {
    document.getElementById("d").textContent = "No discount available";
  }
  document.getElementById("n").textContent = "Customer: " + name;
  document.getElementById("f").textContent = "Food Item: " + item;
  document.getElementById("p").textContent = "Price: Rs. " + price;
  document.getElementById("q").textContent = "Quantity: " + quantity;
  document.getElementById("t").textContent = "Total: Rs. " + total;

  document.getElementById("out").style.display = "block";
}