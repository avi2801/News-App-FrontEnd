import React,{useState} from 'react'
import './SignUp.css'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button'
import { Image } from 'react-bootstrap';
import img from '../Assests/thomas-charters-zAi2Is48-MA-unsplash.jpg';
function Login() {
	const [info,setInfo] = useState({email:'',password:''})
	function handleSubmit()
	{
		alert("The button has been clicked")
	}

	return (
		< div className="container">
			<div className="row justify-content-center ">
				<div >
					<div className="col-sm-12 color-0">
						<h2 className="mt-2 text-center">Login</h2>
					</div>
					<div className="text-center">

						<div className="col-sm-12 color-0">
							<TextField id="standard-basic" label="Email" className="mt-2"
							value={info.email} onChange={e=>setInfo({...info,name:e.target.value})} />
						</div>
						<div className="col-sm-12 color-0">
							<TextField id="standard-basic" label="Password" className="mt-2"
							value={info.password} onChange={e=>setInfo({...info,name:e.target.value})} />
						</div>
						<div className="col-sm-12 color-0">
							<p className="mt-1">Remember Me! <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} /></p>
						</div>
						<div className="button"><Button variant="contained" color="secondary" onClick={handleSubmit}>Login</Button></div>
						<p className="mt-2">New User<a href="/"> Register Here!</a></p>
					</div>

				</div>

				{/* <div className="col-sm-6 padding-0">
					<Image className="img-fluid" src={img} />
				</div> */}
			</div>

		</div>

	)
}

export default Login;
