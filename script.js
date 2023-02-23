"use strict";
exports.__esModule = true;
;
var mountains = [
    {
        name: "kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    },
];
function findNameOfTallestMountain(mountains) {
    var tallestMountain = mountains.reduce(function (prev, current) { return (prev.height > current.height) ? prev : current; });
    return tallestMountain.name;
}
var gotMountain = findNameOfTallestMountain(mountains);
console.log(gotMountain);
;
var products = [
    {
        name: "Coconut",
        price: 1
    },
    {
        name: "Bucket",
        price: 10
    },
    {
        name: "Benjamin",
        price: 100
    },
    {
        name: "Healthcare",
        price: 100000
    },
];
function calcAverageProductPrice(product) {
    // let total:number = 0;
    // product.forEach((p:Product)=>{
    //     total += p.price;
    // });
    var total = product.reduce(function (total, current) { return total + current.price; }, 0) / product.length;
    return total;
}
var result = calcAverageProductPrice(products);
console.log(result);
;
var inventory = [
    {
        product: {
            name: "motor",
            price: 10.00
        },
        quantity: 10
    },
    {
        product: {
            name: "sensor",
            price: 12.50
        },
        quantity: 4
    },
    {
        product: {
            name: "LED",
            price: 1.00
        },
        quantity: 20
    },
];
function calcInventoryValue(inventory) {
    // let total:number= 0;
    // inventory.forEach((i:InventoryItem)=>{
    //     total += (i.product.price * i.quantity)
    // });
    var total = inventory.reduce(function (total, current) { return total + current.product.price * current.quantity; }, 0);
    return total;
}
var result3 = calcInventoryValue(inventory);
console.log(result3);
