
function calculateTotal(cart) {
    let total = 0;

    for (const item of cart) {
        total += item.price;
    }

    return total;
}

const cart = [
    { name: "Pen", price: 10, quantity: 3 },
    { name: "Book", price: 50, quantity: 2 }
];

console.log("Total:", calculateTotal(cart));
