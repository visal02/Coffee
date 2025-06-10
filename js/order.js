function addRow() {
    const table = document.getElementById("order-items");
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${table.rows.length + 1}</td>
        <td><input type="text" class="product"></td>
        <td><input type="number" class="quantity" value="1" min="1"></td>
        <td><input type="number" class="unit-price" value="0" min="0"></td>
        <td class="total-price">0</td>
    `;
    table.appendChild(row);
}

function calculateTotal() {
    let subtotal = 0;
    document.querySelectorAll("#order-items tr").forEach(row => {
        const quantity = row.querySelector(".quantity").value;
        const unitPrice = row.querySelector(".unit-price").value;
        const totalPrice = quantity * unitPrice;
        row.querySelector(".total-price").textContent = totalPrice;
        subtotal += totalPrice;
    });
    document.getElementById("subtotal").textContent = subtotal;
    const discount = document.getElementById("discount").value;
    document.getElementById("total").textContent = subtotal - discount;
}