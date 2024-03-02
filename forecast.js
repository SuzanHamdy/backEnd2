
const request =require("request")

const forecast =( latitude ,longtitude , callback) =>{
    const url = "https://api.weatherapi.com/v1/current.json?key=b0b277fa7d5b4ec0b75185655240103&q="+ latitude +","+longtitude



request({url , json : true} , (error , response) => {
    if (error) {
        callback("ERORR HAS OCCURED" , undefined )
    } else if(response.body.error)  {
       callback(response.body.error.message , undefined) 
    } else {
        callback( undefined , response.body.location.name+"it is :"+ response.body.current.condition.text +"and temp is" +
         response.body.current.temp)
    }
    
})
}
module.exports ={
    forecast
}