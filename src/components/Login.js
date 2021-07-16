import React,{useState} from 'react'
import { Redirect} from "react-router-dom"
import { signin } from './apiCalls';
const Login = () => {
    const [values,setValues] = useState({
        email:"",
        password:"",
        error:"",
        isloggedin:false,
        message:false,
        loading:false
    });
    
    
    
    const {email,password,error , isloggedin ,message ,loading } = values;

    const performRedirect = ()=>{
        if(isloggedin){
          return <Redirect  to="/home" />
         }
    }
    
    
   


    const failure = ()=>{
        if(!isloggedin  && message){
            return(
                <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                <div className="alert alert-danger"
                style={{display: error ? " ":"none"}}>
                  {error}
               </div>
               </div>
               </div>
            )
        }
    }

    const handleSubmit = event =>{
        event.preventDefault();
        setValues({...values,error:false,loading:true})
        signin({email,password})
        .then(
            data =>{
                console.log(data);
                if(data?.errors){
                    setValues({...values,error:data.errors[0].message,isloggedin:false,message:true,loading:false})
                    console.log(values);
                }
                else{
                    setValues({...values , isloggedin:true})
                }
            }
        )
        .catch(err => console.log(err))
        
    }



    const handleChange = name=> event=>{
        setValues({...values,err:false,[name]:event.target.value})
    }

    const loadingMessage = ()=>(
        loading && (
            <div className="alert alert-info">
               <h2>Loading..</h2>
            </div>
        )
    )

    return (
        <div>
           <div className="p-3 w-50 position-absolute top-50 start-50 translate-middle ">
           <h2 className="text-center mb-3">Login here</h2>

                <input
                     type="email"
                     placeholder="Eg:somethiing@gamil.com"
                     className="form-control mb-3"
                     value={email} 
                     onChange={handleChange("email")}
                     />
                <input
                     type="password"
                     placeholder="Password"
                     className="form-control mb-3"
                     value={password} 
                     onChange={handleChange("password")}
                     />
                 <button className="form-control bg-primary w-70" onClick={handleSubmit}>
                           Login
                      </button>
            </div>
            {
                performRedirect()
            }
            {
                failure()
            }
            {
                loadingMessage()
            }
        </div>
    )
}

export default Login
