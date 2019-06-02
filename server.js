const express=require('express');
const app=express();
const serverRoute = express.Router();

const bodyParser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const PORT=4000;

let personSchema = require('./person.model');
app.use(cors());
app.use(bodyParser.json());



mongoose.connect('mongodb://127.0.0.1:27017/person', {useNewUrlParser:true});
mongoose.connection.once('open', function(){console.log("mongodb connection established!!"); } )




serverRoute.route('/add').post(function(req,res){
	
	let newPerson=new personSchema(req.body);
	newPerson.save();
	
	
	
});


serverRoute.route('/').get(function(req,res){
	
	personSchema.find(function(err,data)
	
	{
		if(err){
			console.log("error occured while fetching data");
		}
		else{
			
			res.json(data);
		}
		
	});
	
});


app.use('/person',serverRoute);


app.listen(PORT, function(){
	console.log("express server listening to port"+PORT);
});