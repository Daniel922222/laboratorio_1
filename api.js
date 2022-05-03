const { fstat } = require('fs');
const { get } = require('http');
const fetch =require('node-fetch')

/*fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data)
})
.catch((error) =>{
console.log(error)
})*/
async function  getdata(){
    try{
    const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = await response.json();
    console.log(data)
    
    
    }catch(error){
        console.log(error)
    }

}
getdata();