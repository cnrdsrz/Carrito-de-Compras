
let products = []
const totalProducts = document.getElementById('totalProducts')
const totalItems = document.getElementById('totalItems')
const cartWrapper = document.getElementById('cartWrapper')

const setCount = () => {
    let totalCount = 0

    for(let item in products) {
        totalCount += products[item].count
    }

    totalItems.innerText = totalCount.toString()
}

const totalPrice = () => {
     totalCart = 0

     for(let item in products){
         totalCart += products[item].price * products[item].count
     }

     totalProducts.innerText = totalCart.toString()
     return totalCart
     
     
}

const productsList = () => {
    const productsItems = products.map(product => {
        return `
        
        <div id="cartWrapper">
        <h2>${product.product}</h2>
        <img src="" alt="">
        <h2>Precio: $ ${product.price}</h2>
        </div>
        
        `
    })
    cartWrapper.innerHTML = productsItems
}

const addProduct = (product, price, count) => {

    for(let item in products){
        if(products[item].product === product) {
            products[item].count ++
            
            setCount()
            totalPrice()
            return
        }

    }
    
    products.push({product: product,price: price, count: count  })

    setCount()
    totalPrice()
    productsList()  
}



//Cleaning JS --> libro para consultar


