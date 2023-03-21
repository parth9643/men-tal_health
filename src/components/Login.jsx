import React from 'react'
import "./Signup.css"
import sideimg from "../assets/signupimage.png"

import { getAuth , signInWithEmailAndPassword , GoogleAuthProvider , signInWithPopup, FacebookAuthProvider } from 'firebase/auth'
import Signup from './SignUp'
import {Link} from "react-router-dom"
import {useState} from "react"

 const Login = () => {

    const [Data,changeData] = useState({
        password:"",
        email:"",
signed_checkbox:false
    })

    
    const [err,changeErr] = useState("");

function submitLogin(){
let form = document.getElementsByClassName("signup_form")[0];

    let error = document.getElementsByClassName("ttt")[0];
    if(Data.email=="" || Data.password=="" || Data.signed_checkbox==false){
        error.style.display="block"
        return;
    }else{
        error.style.display="none"
    }

    const auth = getAuth();
signInWithEmailAndPassword(auth, Data.email, Data.password)
  .then((userCredential) => {
    const user = userCredential.user;
    let doc = document.getElementsByClassName("tt")[0];
    doc.style.display="none"
    alert("Signed IN")
console.log(user);
  })
  .catch((error) => {
   console.log(error)
changeErr(error.message)
let doc = document.getElementsByClassName("tt")[0];
doc.style.display="block"
return;
  });

  form.reset();

}


function handleClick(){
const auth = getAuth();
const provider = new GoogleAuthProvider();

signInWithPopup(auth,provider).then((result)=>{
console.log(result.user)
}).catch((err)=>{
    console.log(err)
})



}

function handleFbClick(){

console.log("facebook login is clicked")

const auth = getAuth();
const provider = new FacebookAuthProvider();

signInWithPopup(auth,provider).then((result)=>{
    console.log(result.user);
}).catch((err)=>{
    console.log(err)
})


}


  return (
    <div className='sup_container cursor-pointer'>
        
<div className='first_container'>
<h1 className='text-blue-900 text-4xl font-bold '  >Login</h1>

<p className='text-lg text-red-400 font-bold'>_____ Login with</p>
<div className='btns'>
<button className='signup_btn' onClick={handleClick}><i className="fa-brands fa-google"></i> <p>Login with Google</p></button>
<button className='signup_btn'  onClick={handleFbClick}> <i className="fa-brands fa-facebook"></i> <p>Login with Facebook</p> </button>
</div>

<form className='signup_form'>
    <div className='form_first'>
        <div className='labels'>
        <label htmlFor='email'>Email</label>
        </div>
       
        <div className='inputs'>
    <input type={'text'}  name="email"  onChange={(event)=>{
        changeData((prev)=>{
            return {...prev,email: event.target.value}
        })
    }} ></input>
    </div>
    </div>
    <label htmlFor='pwd'>Password</label>
    <input type={'text'} name='pwd' className='ips' onChange={(event)=>{
        changeData((prev)=>{
            return {...prev,password: event.target.value}
        })
    }} ></input>
    

<div className='flex gap-4 max-w-xs'>
    <input type={'checkbox'} className="form_checkbox mt-4"  onChange={(event)=>{
        changeData((prev)=>{
            return {...prev,signed_checkbox: event.target.checked}
        })
    }}></input>
    <p className='mt-4'>Keep me signed in for 30 Days.</p>
    </div>
</form>

<i class="fa-sharp fa-solid fa-arrow-right form_icon fa-xl cursor-pointer" onClick={submitLogin}></i>

<div className='ttt'><p className=' text-red-600  '>Please fill all the fields</p></div>
<div className='tt'><p className=' text-red-600  '>{err}</p></div>

<div className='flex hue'>
<p>Don't have an account?   </p><Link to="/signup"><p className='text-red-500 ml-2 cursor-pointer'>Sign Up</p></Link>
</div>
</div>


    <img src={sideimg} alt='no image found' ></img>
   
    </div>
  )
}


export default Login;
