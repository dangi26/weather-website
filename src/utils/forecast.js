const request = require('request')
const forecast = (latitude,longitude, callback)=>{

    const url = 'https://api.darksky.net/forecast/2a829905beb33559332a9dc01cf0c101/' +latitude+ ',' +longitude

    request({url, json: true}, (error, {body})=>{

        if(error){
            callback('unable to connect to weather services', undefined);
        }else if(body.error){
           callback('unable to find location. try again', undefined);
        }else{
            callback(undefined,body.daily.data[0].summary+ ' it is currently '+body.currently.temperature+' degree out. the high today is ' +body.daily.data[0].temperatureHigh + 'with a low of '+ body.daily.data[0].temperatureLow + '. there is a '+body.currently.precipProbability+'% chance of rain.')
        }
        
    })
    
}
module.exports = forecast