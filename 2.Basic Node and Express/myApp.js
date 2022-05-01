var express = require('express');
var app = express();
var bodyParser = require('body-parser');

console.log('Hello World'); //Escribir Hello World en consola

app.get("/",function(req, res) {
  res.send('Hello Express')}); //Iniciar un servidor express

app.get("/",function(req, res) {
  res.sendFile(__dirname + '/views/index.html')}); //Servir un archivo HTML

app.use("/public", express.static(__dirname + "/public")); //Servir archivo estatico

app.get("/json",function(req, res) {
  res.json({"message": "Hello json"}) }); //Servir im Json en una ruta especifica

myVar=process.env['MESSAGE_STYLE']
app.get("/json",function(req, res) {
if (process.env.MESSAGE_STYLE==="uppercase") {
  res.json({"message": "HELLO JSON"});
} else {
  res.json({"message": "Hello json"});
}}); //Uso del arcvhivo .env


app.use(function(req, res, next) {
  console.log(req.method +" " + req.path + " - " + req.ip);
  next();}); //implementar middleware de registrador de solicitudes nivel raiz

app.get('/now',function(req, res, next) {
  req.time = new Date().toString();  
  next();
}, function(req, res) {
  res.send({time : req.time});}); //encadenar middleware para crear un servidor de tiempo

app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word
  });
}); //obtener la entradad de parametros de ruta  del cliente


app.get("/name", (req, res) => {
  var firstName = req.query.first;
  var lastName  = req.query.last; 
  var {first: firstName , last:lastName}=req.query;
  res.json({
     name:`${firstName} ${lastName}`});
}); // obtener la entrada de  parametros de consulta del cliente 


app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json()); // Uso de Body-Parse para analizar solicitudes POST 




//Obtener  datos de solicitudes POST  
app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());
app.post("/name", (req, res) => {
  var string = req.body.first + " " + req.body.last; 
  res.json({name : string});
});





























 module.exports = app;
