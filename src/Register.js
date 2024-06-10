import { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const Register = () => {
const[id,idChange] = useState('');
const[password,passwordChange] = useState('');
const[email,emailChange] = useState('');

const navigate = useNavigate();

const IsValidate = () =>{
    let isproceed = true;
    let errormessage = 'Please enter the value in ';
    if(id === null || id === ""){
        isproceed = false;
        errormessage += 'Username ';
    }

    if(password === null || password === ""){
        isproceed = false;
        errormessage += 'Password ';
    }

    if(email === null || email === ""){
        isproceed = false;
        errormessage += 'Email ';
    }

    if(!isproceed){
        toast.warning(errormessage)
    }else{
        if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){
        }else{
            isproceed = false;
            toast.warning('Enter valid email')
        }
        }
    
    return isproceed;
}

    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj={id,password,email};
        //console.log(regobj);
        if(IsValidate()){
        fetch("http://localhost:8000/user",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(regobj)
        }).then((res)=>{
                toast.success('Registered successfully.')
                navigate('/login');
        }).catch((err)=>{
                toast.error('Failed :'+err.message);
            });
    }
}
  return (
    <div>
       <div className='=offset-lg-3 col-lg-6'>
          <form className="container"  onSubmit={handlesubmit} style={{marginTop:'200px', marginLeft:'50%'}} >
             <div className="card" >

                <div className='card-header'>
                <h1>User Registration</h1>
                </div>
              
                <div className='card-body'>
                    <div className='=row'>
                        <div className='col-lg-6'>
                            <div className='form-group'>
                                <label>User Name<span className='errmsg'>*</span></label>
                                <input value={id} onChange={e=>idChange(e.target.value)}className='form-control'></input>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='form-group'>
                                <label>Password<span className='errmsg'>*</span></label>
                                <input value={password} onChange={e=>passwordChange(e.target.value)}type='password'className='form-control'></input>
                            </div>
                        </div>
                    
                        <div className='col-lg-6'>
                            <div className='form-group'>
                                <label>Email<span className='errmsg'>*</span></label>
                                <input value={email} onChange={e=>emailChange(e.target.value)}className='form-control'></input>
                            </div>
                        </div>
                    
                    </div>
                </div>

                <div className='card-footer'>
                   <button type='submit' className="btn btn-primary">Register</button>&nbsp;    
                   <a className='btn btn-danger'Link to={'/login'}>back</a>
                </div>
             </div>
          </form>
       </div>

       
    </div>
  );
}

export default Register;