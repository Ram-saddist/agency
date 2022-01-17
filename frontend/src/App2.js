import {Routes,Route} from 'react-router-dom'
import {Fragment} from 'react'

import Header from './components/Header'
import Home from './components/Home'
import ListOfUsers from './components/ListOfUsers'
import NewUser from './components/NewUser'
import TotalMonth from './components/TotalMonth'
import NotFound from './components/NotFound'
function App2(){
	return(
		<Fragment>
			<Header/>
			<Routes>
				<Route exact path="/" element={<Home/>}/>
				<Route path="/listofusers" element={<ListOfUsers/>}/>
				<Route path="/newuser" element={<NewUser/>}/>
				<Route path="/totalmonth" element={<TotalMonth/>}/>
				<Route path="*" element={<NotFound/>}/>
			</Routes>
		</Fragment>
	)
}



export default App2;