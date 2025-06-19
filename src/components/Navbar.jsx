import { Link } from "react-router-dom";


export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Home</span>
				</Link>
				<div className="ml-auto">
					<Link to="/submit">
						<button
						 onClick={
							 ()=>{
								 const emptyContact = {
									 name: '',
									 phone: '',
									 email:'',
									 address:''
									}
									dispatch({type:"set_single_contact", payload: singleContact})
								}
							}
							className='btn btn-primary'>
							Add New Contact
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
}