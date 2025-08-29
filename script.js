function calculateTotal() {
  const priceElements = document.querySelectorAll(".price");
  let total = 0;

  priceElements.forEach((price) => {
    total += Number(price.textContent.trim());
  });

 
  const oldTotalRow = document.getElementById("totalRow");
  if (oldTotalRow) {
    oldTotalRow.remove();
  }

  const totalRow = document.createElement("tr");
  totalRow.id = "totalRow";

  const labelCell = document.createElement("td");
  labelCell.textContent = "Total";

  const totalCell = document.createElement("td");
  totalCell.textContent = total;
  totalCell.id = "ans";

  totalRow.appendChild(labelCell);
  totalRow.appendChild(totalCell);

  const table = document.querySelector("table");
  table.appendChild(totalRow);
}
