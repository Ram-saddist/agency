import {Fragment,Component} from 'react'
import axios from 'axios'
class ListOfUsers extends Component{
	constructor(){
		super();
		this.state={
			listOfUsers:[]
		}
	}
	componentDidMount(){
		fetch('http://localhost:2005/getusers')
		.then(res=>res.json())
		.then(response=>{
			this.setState({
				listOfUsers:response
			})
			console.log(this.state.listOfUsers);
		})
	}

	render(){
		return(
			<Fragment>
				<h1>Users are</h1>
				{
					this.state.listOfUsers.map((i)=>(
						<div key={i._id}>
							<p>{i.customer_name}</p>
						</div>
					))
				}
			</Fragment>
		)
	}
}
export default ListOfUsers