const scores = [10, 30, 15,25,50,40,5];

// const filteredScores = scores.filter((score) =>{
//     return score > 20;
// })
// console.log(filteredScores);

// const users = [
//     {name: 'igor', premium: 'true'},
//     {name: 'ola', premium: 'false'},
//     {name: 'ania', premium : 'false'},
// ]; 

// const premiumUsers = users.filter(users => users.premium)

const prices = [20,10,30,25,15,40,80, 5];

const salePrices = prices.map(price => price / 2)

const products = [
    {name: 'gold star', prie: 20},
    {name: 'mushroom', price: 40},
    {name: 'banana', price: 10}
]
const saleProducts = products.map(product =>{
    if(products.price > 30){
        return {name: product.name, price: product.price / 2}
    }else{
        return product
    }
})

console.log(saleProducts);
console.log(salePrices);