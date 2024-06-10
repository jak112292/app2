import {useState} from "react"
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Login() {
  const [username,usernameUpdate] = useState('');
  const [password,passwordUpdate] = useState('');
 

  const usenavigate=useNavigate()

  const ProceedLogin = (e) => {
    e.preventDefault();
    if(validate()){
     fetch("http://localhost:8000/user/"+username).then((res)=>{
      return res.json();
     }).then((resp)=>{
      if(Object.keys(resp).length===0){
        toast.error('Enter valid user');
      }else{
        if(resp.password===password){
            toast.success('Welcome to ERP system')
            usenavigate('/')
        }else{
          toast.error('Enter valid credential');
        }
      }
     }).catch((err)=>{
      toast.error('Login Failed to :'+err.message)
     })
    }
  }
 const validate = () => {
    let result=true;
    if(username===''||username===null){
      result=false;
      toast.warning('Enter Username');
    }
    if(password===''||password===null){
      result=false;
      toast.warning('Enter Password');
    }
       return result;
  }
  
  return (
    <div className="formContainer">
    <form onSubmit={ProceedLogin}>
        <h1>ERP system</h1>
        <hr />
        <div className="uiForm"> 
          <div className="formField">
            <label> UserName: </label>
            <input value={username} placeholder="username"  onChange={e=>usernameUpdate(e.target.value)}/>
          </div>
          <div className="formField">
            <label> Password:  </label>
            <input value={password} type="password" placeholder='password' onChange={e=>passwordUpdate(e.target.value)}/>
          </div>
          <button type="submit" className='btn btn-primary'>login</button>
          <div>
           <Link className='btn btn-link' to={'/register'}>Sign up</Link>
          </div>
        </div>
    </form>
    </div>
  )
}

export default Login