import { useState } from 'react';
import {Link,useNavigate} from "react-router-dom"


export default function Form() {
  let navigate=useNavigate();

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
setName(e.target.value);
setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
setEmail(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};

// Handling the form submission
// const handleSubmit = (e) => {
// e.preventDefault();
// if (name === '' || email === '' || password === '') {
// setError(true);
// } else {
// setSubmitted(true);
// setError(false);
// }
// };

// Showing success message
const successMessage = () => {
return (
<div
className="success"
style={{
display: submitted ? '' : 'none',
}}>
<h1>User {name} successfully ordered!!</h1>
</div>
);
};
///////////////
const handleClick=(e)=>{
    e.preventDefault()
    const info={name,email,password}
    console.log(info)
    fetch("http://localhost:8080/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(info)
   
  }).then(()=>{
    if (name === '' || email === '' || password === '') {
      setError(true);
      } else {
      setSubmitted(true);
      setError(false);
      }

      navigate("/")
  })

  }
// Showing error message if error is true
const errorMessage = () => {
return (
<div
className="error"
style={{
display: error ? '' : 'none',
}}>
<h1>Please enter all the fields</h1>
</div>
);
};

return (
<div className="form">
<div>
<h1>Customer info</h1>
</div>

{/* Calling to the methods */}
<div className="messages">
{errorMessage()}
{successMessage()}
</div>

<form>
{/* Labels and inputs for form data */}
<label className="label">Name</label>
<input onChange={handleName} className="input"
value={name} type="text" />

<label className="label">phone</label>
<input onChange={handleEmail} className="input"
value={email} type="text" />

{/* <label className="label">Password</label>
<input onChange={handlePassword} className="input"
value={password} type="password" /> */}

<label className="label">Address</label>
<input onChange={handlePassword} className="input"
value={password} type="text" />

<button onClick={handleClick} className="btn" type="submit">
Submit
</button>

</form>

</div>
);
}