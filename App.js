




const forecast =require("./data1/forecast")

const geocode = require("./data1/geocode")
const country = process.argv[2]

///////////////////////////////////
geocode( country ,( error , data )=> {
    console.log("ERROR :" ,error)
    console.log( "DATA :" ,data)  
    
forecast( data.latitude , data.longtitude , ( error , data) => {
    console.log("ERROR :" ,error)
    console.log( "DATA :" ,data)
    })
})

















