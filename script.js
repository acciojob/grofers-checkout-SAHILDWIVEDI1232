function calculateTotal() {
  const priceElements = document.querySelectorAll(".price");
  let total = 0;

  priceElements.forEach((price) => {
    total += Number(price.textContent);
  });
const totalRow = document.createElement("tr");

const labelCell = document.createElement("td");
labelCell.textContent = "Total";

const totalCell = document.createElement("td");
totalCell.textContent = total;

totalRow.appendChild(labelCell);
totalRow.appendChild(totalCell);

const table = document.querySelector("table");
table.appendChild(totalRow);
document.querySelector("button").addEventListener("click", calculateTotal);