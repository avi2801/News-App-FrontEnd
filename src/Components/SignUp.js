import React,{useState} from 'react'
import './SignUp.css'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button'
import { Image } from 'react-bootstrap';
import img from '../Assests/thomas-charters-zAi2Is48-MA-unsplash.jpg';
function SignUp() {
	const [info,setInfo] = useState({name:'',username:'',email:'',password:'',cpassword:''})
	function handleSubmit()
	{
		alert("The register button is clicked")
	}
	return (
		< div className="container">
			<div className="row justify-content-center ">
				<div >
					<div className="col-sm-12 color-0">
						<h2 className="mt-2 text-center">Sign-Up</h2>
					</div>
					<div className="text-center">
						<div className="col-sm-12 color-0">
							<TextField id="standard-basic" label="Name" className="mt-2"
							 value={info.name} onChange={e=>setInfo({...info,name:e.target.value})}/>
						</div>
						<div className="col-sm-12 color-0">
							<TextField id="standard-basic" label="User@Name" className="mt-2"
							value={info.username} onChange={e=>setInfo({...info,name:e.target.value})} />
						</div>
						<div className="col-sm-12 color-0">
							<TextField id="standard-basic" label="Email" className="mt-2"
							value={info.email} onChange={e=>setInfo({...info,name:e.target.value})} />
						</div>
						<div className="col-sm-12 color-0">
							<TextField id="standard-basic" label="Password" className="mt-2"
							value={info.password} onChange={e=>setInfo({...info,name:e.target.value})} />
						</div>
						<div className="col-sm-12 color-0">
							<TextField id="standard-basic" label="Confirm Password" className="mt-2"
							value={info.cpassword} onChange={e=>setInfo({...info,name:e.target.value})}/>
						</div>
						<div className="col-sm-12 color-0">
							<p className="mt-1">Agree to all the policies <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} /></p>
						</div>
						<div className="button"><Button variant="contained" color="secondary" onClick={handleSubmit}>Register</Button></div>
                        <p className="mt-2">Already Register<a href="/login"> Login Here!</a></p>
					</div>

				</div>

				{/* <div className="col-sm-6 padding-0">
					<Image className="img-fluid" src={img} />
				</div> */}
			</div>

		</div>

	)
}

export default SignUp;
