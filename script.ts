export{}
interface Mountain{
    name:string;
    height:number
};
let mountains:Mountain[]=[
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
]
function findNameOfTallestMountain(mountains:Mountain[]):string{
    let tallestMountain:Mountain = mountains.reduce((prev,current) => (prev.height > current.height)?prev:current);
    return tallestMountain.name
}
let gotMountain:string = findNameOfTallestMountain(mountains);
console.log(gotMountain);

interface Product{
    name:string;
    price:number
};
let products:Product[]=[
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
]
function calcAverageProductPrice(product:Product[]):number{
    // let total:number = 0;
    // product.forEach((p:Product)=>{
    //     total += p.price;
    // });
    let total:number = product.reduce((total,current) =>total + current.price,0)/product.length
    return total;
}

let result:number = calcAverageProductPrice(products);
console.log(result);

interface InventoryItem{
    product:Product;
    quantity:number
};
let inventory:InventoryItem[]=[
    {
        product:{
            name:"motor",
            price:10.00
        },
        quantity: 10
    },
    {
        product:{
            name:"sensor",
            price:12.50
        },
        quantity: 4
    },
    {
        product:{
            name:"LED",
            price:1.00
        },
        quantity: 20
    },
]

function calcInventoryValue(inventory:InventoryItem[]):number{
    // let total:number= 0;
    // inventory.forEach((i:InventoryItem)=>{
    //     total += (i.product.price * i.quantity)
    // });
    let total:number = inventory.reduce((total,current) =>total + current.product.price*current.quantity,0)
    return total;
}
let result3:number = calcInventoryValue(inventory);
console.log(result3);