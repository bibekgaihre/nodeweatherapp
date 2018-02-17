const request= require('request');

var getWeather=(lat,lng,callback)=>{
    request({
        url:`https://api.darksky.net/forecast/880c41f96dfd70261be8c0786ca0fcb1/${lat},${lng}`,
        json:true
    },(error, response, body)=>{
        if(error){
            callback('unable to connect at forecast servers');
            
        }
        else if(response.statusCode === 400){
            callback('Unable to find that address');
        }
        else if(response.statusCode === 200){
            callback(undefined,{
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
    
            });
        }
    });
};



module.exports.getWeather= getWeather;