import React,{useState} from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {

const [state, setState] = useState("Login");
const[formData,setFormData] = useState({
  username:"",
  password:"",
  email:""
})
const changeHandler = (e) => {
  setFormData({...formData,[e.target.name]:e.target.value})
}

const login = async () =>{
    // console.log("Login Function Executed",formData);
    let dataObj;
    await fetch('https://ecommercebackend-s6d7.onrender.com/login', {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {dataObj=data});
      console.log(dataObj);
      if (dataObj.success) {
        localStorage.setItem('auth-token',dataObj.token);
        window.location.replace("/");
      }
      else
      {
        alert(dataObj.errors)
      }
} 
const signup = async ()=>{
    // console.log("SignUp Function Executed",formData);
    let responseData;
    await fetch('https://ecommercebackend-s6d7.onrender.com/signup', {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {responseData=data});

      if (responseData.success) {
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/");
      }
      else
      {
        alert(responseData.errors)
      }
}
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1 className="heading">{state}</h1>
        <div className="main-content">
          <div className="right-content">
            <div className="loginsignup-fields">
              {state==="Welcome to the DermaDazz Family"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" />:<></>}
              <input type="email" name="email" value={formData.email} onChange={changeHandler} placeholder="Email Address" />
              <input type="password" name="password" value={formData.password} onChange={changeHandler} placeholder="Password" />
            </div>
            <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
            {state==="Welcome to the DermaDazz Family"?<p className="loginsignup-login">
              Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span>
            </p>:<p className="loginsignup-login">
              Create an account? <span onClick={()=>{setState("Welcome to the DermaDazz Family")}}>Click here</span>
            </p>}
            
            <div className="loginsignup-agree">
              <input type="checkbox" name="" id="" />
              <p>
                By continuing, i agree to the terms of use & privacy policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
