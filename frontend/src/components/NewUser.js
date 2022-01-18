import {Fragment,Component} from 'react'
import '../stylings/NewUser.css';
import axios from 'axios';

const initialState={
	customer_name:"",
	price:"",
	discount:"",
	fulls:"",
	empties:"",
	p_empties:"",
	paid_amount:"",
	pending_amount:""
}
class NewUser extends Component{

	constructor(){
		super();
		this.state=initialState
	}
	handleChange=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	handleSubmit=(e)=>{
		e.preventDefault();
		console.log("username",this.state.customer_name)
		const newUser={
			customer_name:this.state.customer_name,
			price:this.state.price,
			discount:this.state.discount,
			fulls:this.state.fulls,
			empties:this.state.empties,
			p_empties:this.state.p_empties,
			paid_amount:this.state.paid_amount,
			pending_amount:this.state.pending_amount
		}
		axios.post("http://localhost:2005/create",newUser)
		this.setState(()=>initialState)
	}
	render(){
		return(
			<div style={{display:"flex"}}>
				<center id="main"><form onSubmit={this.handleSubmit}>
					<p><input 
						type="text" 
						name="customer_name"
						value={this.state.customer_name}
						onChange={this.handleChange}
						placeholder="Enter customer name"/></p>
					<p><input 
						type="text" 
						name="price"
						value={this.state.price}
						onChange={this.handleChange}
						placeholder="Enter Price "/></p>
					<p><input 
						type="text" 
						name="discount"
						value={this.state.discount}
						onChange={this.handleChange}
						placeholder="Enter discount for the customer"/></p>
					<p><input 
						type="text" 
						name="fulls"
						value={this.state.fulls}
						onChange={this.handleChange}
						placeholder="Enter number of Fulls"/></p>
					<p><input 
						type="text" 
						name="empties"
						value={this.state.empties}
						onChange={this.handleChange}
						placeholder="How many empty"/></p>
					<p><input 
						type="text" 
						name="p_empties"
						value={this.state.p_empties}
						onChange={this.handleChange}
						placeholder="Enter P.empties"/></p>
					<p><input 
						type="text" 
						name="paid_amount"
						value={this.state.paid_amount}
						onChange={this.handleChange}
						placeholder="Enter the amount paid"/></p>
					<p><input 
						type="text" 
						name="pending_amount"
						value={this.state.pending_amount}
						onChange={this.handleChange}
						placeholder="Enter the pending paid"/></p>
					<button className="btn-grad">Submit</button>
				</form></center>
				<div><h1>Agency</h1></div>
			</div>
		)
	}
	
}
export default NewUser