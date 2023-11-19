const products = [
    {nombre: "bloodymark", precio: 9000, id:"1", img: "../img/rojita.webp", idCat:"2"},
    {nombre: "blackholesun", precio: 15000, id:"2", img: "../img/negrita.webp", idCat:"3"},
    {nombre: "romerita", precio: 12000, id:"3", img: "../img/verdu1.webp", idCat:"2"},
    {nombre: "sapucai", precio: 2000, id:"4", img: "../img/verdu2.jpg", idCat:"3"},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(products)
        }, 500)
    })
}

//Creamos una nueva función similar pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = products.find(products => products.id === id);
            resolve(producto);
        }, 500)
    })
}


//Creamos una nueva funcion que retorna la categoría.

export const getProductosPorCategoria = (idCat) => {
    return new Promise( resolve => {
        setTimeout( () => {
            const productosCategoria = products.filter(prod => prod.idCat === idCat)
            resolve(productosCategoria)
        }, 500)
    })
}