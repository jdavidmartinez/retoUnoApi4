const express  = require('express');
const app  = express();
const bodyParser = require('body-parser');
const request 	= require('request');

const url 	= "https://www.datos.gov.co/resource/gt2j-8ykr.json"

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/femenino', function (req, res) {
    request({
	    url: url,
	    json: false
  },function (error, response, body) {
        
    let result = JSON.parse(body)
    console.log(result[0])

    if (!error && response.statusCode === 200) {
        // Pintamos la respuesta JSON en navegador.
        const masculino = result.filter(val => val.sexo === 'M') 
        const femenino = result.filter(val => val.sexo === 'F')
        const veinte = result.filter(val => val.edad <=20)
        const cuarenta = result.filter(val => val.edad > 20 && val.edad <=40)
        const mayorCuarenta = result.filter(val => val.edad > 40 )

        res.send(femenino) 
    }
    
   })
});

app.get('/masculino', function (req, res) {
    request({
	    url: url,
	    json: false
  },function (error, response, body) {
        
    let result = JSON.parse(body)
    console.log(result[0])

    if (!error && response.statusCode === 200) {
        // Pintamos la respuesta JSON en navegador.
        const masculino = result.filter(val => val.sexo === 'M') 
       
        res.send(masculino) 
    }
    
   })
});

app.get('/veinte', function (req, res) {
    request({
	    url: url,
	    json: false
  },function (error, response, body) {
        
    let result = JSON.parse(body)
    console.log(result[0])

    if (!error && response.statusCode === 200) {
        // Pintamos la respuesta JSON en navegador.
        
        const veinte = result.filter(val => val.edad <=20)
        

        res.send(veinte) 
    }
    
   })
});

app.get('/cuarenta', function (req, res) {
    request({
	    url: url,
	    json: false
  },function (error, response, body) {
        
    let result = JSON.parse(body)
    console.log(result[0])

    if (!error && response.statusCode === 200) {
        // Pintamos la respuesta JSON en navegador.
        
        const cuarenta = result.filter(val => val.edad > 20 && val.edad <=40)
        
        res.send(cuarenta) 
    }
    
   })
});

app.get('/mayorcuarenta', function (req, res) {
    request({
	    url: url,
	    json: false
  },function (error, response, body) {
        
    let result = JSON.parse(body)
    console.log(result[0])

    if (!error && response.statusCode === 200) {
        // Pintamos la respuesta JSON en navegador.
        const masculino = result.filter(val => val.sexo === 'M') 
        const femenino = result.filter(val => val.sexo === 'F')
        const veinte = result.filter(val => val.edad <=20)
        const cuarenta = result.filter(val => val.edad > 20 && val.edad <=40)
        const mayorCuarenta = result.filter(val => val.edad > 40 )

        res.send(mayorCuarenta) 
    }
    
   })
});

app.listen (3000, () => {
    console.log('el servidor esta escuchando en el puerto 3000');
});