const express = require('express');


const app = express() //create our web server!
const port = 3000; // local address of our server

const {Musician,  Band} = require('./index')

//express route functions have 3 parts: HTTP Verb, Path, Callback

app.get('/home', (req, res) => { //callbacks have 2 default arguments : req, res
	console.log("Homepage!!")
	res.send('<h1>My silly site!</h1>')
})

app.get('/random', (req, res) =>{
	const random = Math.floor(Math.random() * 10);
	res.send(`Our random # is ${random}`)
})

app.get('/musicians', async (req, res) => {
	let musicians = await Musician.findAll()
	res.json({musicians});
})


//How can we make a route, to get all our Bands?
app.get('/bands', async (req, res) => {
	let bands = await Band.findAll();
	res.json({bands})
})

//glue the server to the port
app.listen(port, () => {
	console.log(`Server is listening on port: ${port}`)
})