const mongoose=require("mongoose");

const users_listSchema={
	customer_name:String,
	price:Number,
	discount:Number,
	fulls:Number,
	empties:Number,
	p_empties:Number,
	paid_amount:Number,
	pending_amount:Number
}

const Users = mongoose.model("Users",users_listSchema);

module.exports=Users;