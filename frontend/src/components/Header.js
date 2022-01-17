import {Link} from 'react-router-dom'

import '../stylings/Header.css';

function Header(){
	return(
		<div className="nav">
			<Link className="nav-link" to="/listofusers">ListOfUsers</Link>
			<Link className="nav-link" to="/newuser">NewUser</Link>
			<Link className="nav-link" to="/totalmonth">Total Month</Link>
		</div>
	)
}
export default Header