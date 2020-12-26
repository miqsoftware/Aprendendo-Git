const data = {
    client:[
        {
            idClient: 1,
            firstName: "Miqueias",
            lastName: "Costa",
        },
        {
            idClient: 2,
            firstName: "Luciana Tabajara",
            lastName: "Silva",
        },
    ],
    product:[
        {
            idProduct: 1,
            prodName: "Bolcha Maria",
            price: 2.59,
        },
        {
            idProduct: 2,
            prodName: "Leite Ninho",
            price: 3.88,
        },
        {
            idProduct: 3,
            prodName: "Bonbons Garato",
            price: 9.97,
        },
    ],    
    itensVenda:[
        {
            idVenda: 1,
            idProduct: 1,
            qtd: 6,
        },
        {
            idVenda: 1,
            idProduct: 1,
            qtd: 3,
        },
        {
            idVenda: 2,
            idProduct: 1,
            qtd: 9,
        },
        {
            idVenda: 2,
            idProduct: 1,
            qtd: 2,
        }, 
        {
            idVenda: 3,
            idProduct: 3,
            qtd: 6,
        },       
    ],
    venda:[
        {  
            idVenda: 1,
        },
        {
            idVenda: 2,
        },  
        {
            idVenda: 3,
        },  
             
    ],
};

const getDatas = function(collection, field, value){
    
    const item = []
    item.push(data[collection].filter(element => value.indexOf(element[field]) !== -1))
    const aux =  data[collection].filter( element => value.indexOf(element[field]) !== -1 )
    console.log('valuefunc', item);
    return  item
} 
const getData = function (collection, field, value){

     return data[collection].filter(element => element[field] === value)
    
}

export default { getData }
