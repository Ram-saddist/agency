const express= require('express');
const app= express();
const cors= require("cors");
const mongoose=require("mongoose");
const Users=require("./contentSchema")
const bodyParser = require('body-parser')
const Pusher = require("pusher");
const port =2005;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//mongo connection
mongoose.connect("mongodb+srv://ramteja:Ramteja98@cluster0.ocedx.mongodb.net/hp_gas_agency")


/*//pusher connection
const pusher = new Pusher({
  appId: "1263426",
  key: "2ba2c2d4fcf289e8295a",
  secret: "3a7e4c1238144fd42e69",
  cluster: "ap2",
  useTLS: true
});*/

app.post("/create",(req,res)=>{
	const {customer_name,price,discount,fulls,empties,p_empties,paid_amount,pending_amount}=req.body;
	const newUser = new Users({
		customer_name,
		price,
		discount,
		fulls,
		empties,
		p_empties,
		paid_amount,
		pending_amount
	});
	newUser.save()
})

app.get("/getusers",(req,res)=>{
	 Users.find()
	.then(found=>res.json(found))
})

/*
app.get("/get",async(req,res)=>{
	await Content.find()
	.then(found=>res.json(found))
})*/

app.get("/",(req,res)=>{
	res.send("working")
})


app.listen(port,()=>console.log("running on port 2005"))