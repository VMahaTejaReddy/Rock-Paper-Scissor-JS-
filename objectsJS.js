// product={
//     name: "Basket Ball",
//     price: 2095
// };
// console.log(product)
// product.price = 2095+500;
// console.log(product);
// product['delivery_time'] = "3 days";
// console.log(product);

function comparePrice(product1, product2){
    if (product1.price<product2.price){
        console.log('Product1 price is less');
    }
    else{
        console.log('Product2 price is less');
    }
};

function isSameProduct(product1, product2){
    console.log(product1.name===product2.name);
};
product1={
    name:"ShirtA",
    price:700
}
product2={
    name:"ShirtA",
    price:1200
}
comparePrice(product1, product2);
isSameProduct(product1, product2);