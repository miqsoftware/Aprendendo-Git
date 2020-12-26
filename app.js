//           "Access-Control-Request-Headers": "*",
//             "Access-Control-Request-Method": "*"
function show(){
 fetch('http://127.0.0.1:8000/api',{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    //'Accept': 'application/json',
    //'Access-Control-Request-Headers': '*',
    //"Access-Control-Request-Method": "*",
    'Access-Control-Allow-Origin': '*'

  },
  body: JSON.stringify({
    query: `      
      query{
        venda(id: 3){
          products{
            prodName
          }
        }
      }
    `
  })
})
.then(res => res.json())
.then(data => {
  console.log(data.data)
})
.catch((e) => {
console.log(e)

})
}
show();