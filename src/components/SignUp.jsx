import React from 'react'
import "./Signup.css"
import sideimg from "../assets/signupimage.png"

import {useState} from "react"
import {Link} from "react-router-dom"

import {getAuth , createUserWithEmailAndPassword , GoogleAuthProvider , signInWithPopup , FacebookAuthProvider } from "firebase/auth"
import {getDocs , addDoc , collection} from "firebase/firestore"
import db from "../firebase/firestore"
 const Signup = () => {


  const [Data,changeData]  =   useState(
    {
        name:"",
        email:"",
        password:"",
        privacy_checkbox:false
    }
  )

  function handleClick(){

    console.log("Handle is Clicked")
    
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    
    signInWithPopup(auth,provider).then((result)=>{
    console.log(result.user)
    const colref = collection(db,'users')
    addDoc(colref,{
        name: result.user.displayName,
        email: result.user.email , 
        password: "*hidden*" ,
    })
    .then(()=>{
        console.log("data is added in the document")
    }).catch((err)=>{
        console.log(err)
    })
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
        addDoc(colref,{
            name: result.user.displayName,
            email: result.user.email , 
            password: "*hidden*" ,
        })
        .then(()=>{
            console.log("data is added in the document")
        }).catch((err)=>{
            console.log(err)
        })
    }).catch((err)=>{
        console.log(err)
    })
    
    
    }

function submitform(e){
    
    let form = document.getElementsByClassName("signup_form")[0];

    console.log(Data.privacy_checkbox)
    let error  = document.getElementsByClassName("ttt")[0];
    if(Data.name=="" || Data.email=="" || Data.password=="" || Data.privacy_checkbox==false){
        error.style.display="block"
        return
    }else{
error.style.display="none"
    }

const auth = getAuth();

console.log("submit form")

createUserWithEmailAndPassword(auth,Data.email,Data.password).then((userCredentials)=>{
    console.log("User is create and his credentials are : " + auth.currentUser)
}).catch((err)=>{
    console.log(err);
})

console.log("yaha aaya?")

const colref = collection(db,'users')
addDoc(colref,{
    name: Data.name,
    email: Data.email , 
    password: Data.password ,
})
.then(()=>{
    console.log("data is added in the document")
}).catch((err)=>{
    console.log(err)
})

form.reset();

}

  return (
    <div className='sup_container'>
        
<div className='first_container'>
<h1 className='text-blue-900 text-4xl font-bold '  >Sign Up</h1>

<p className='text-lg text-red-400 font-bold'>_____ Sign Up with</p>
<div className='btns'>
<button className='signup_btn' onClick={handleClick}><i className="fa-brands fa-google"></i> <p>Sign Up with Google</p></button>
<button className='signup_btn' onClick={handleFbClick}> <i className="fa-brands fa-facebook"></i> <p>Sign Up with Facebook</p> </button>
</div>

<form className='signup_form'>
    <div className='form_first'>
        <div className='labels'>
        <label htmlFor='display_name'  >Name</label>
        <label htmlFor='email'>Email</label>
        </div>
       
        <div className='inputs'>
    <input type={'text'}  name="display_name"  onChange={(event)=>{
        changeData((prev)=>{
            return {...prev,name : event.target.value}
        })
    }} ></input>
    <input type={'text'}  name="email" onChange={(event)=>{
        changeData((prev)=>{
            return {...prev,email : event.target.value}
        })
    }} ></input>
    </div>
    </div>
    <label htmlFor='pwd'>Password</label>
    <input type={'text'} name='pwd' className='ips' onChange={(event)=>{
        changeData((prev)=>{
            return {...prev,password : event.target.value}
        })
    }} ></input>
    

<div className='flex gap-4 max-w-xs'>
    <input type={'checkbox'} className="form_checkbox" onChange={(event)=>{
        changeData((prev)=>{
            return {...prev,privacy_checkbox : event.target.checked}
        })
    }} ></input>
    <p>I've read all the Terms of services and our privacy policy</p>
    </div>
</form>

 <i className="fa-sharp fa-solid fa-arrow-right form_icon fa-xl" onClick={submitform}></i> 

 <div className='ttt'><p className=' text-red-600  '>Please fill all the fields</p></div>
<div className='flex '>
<p>Already have an account?   </p> <Link to="/Login"><p className='text-red-500 ml-2'>Login </p> </Link> 
</div>



</div>


    <img src={sideimg} alt='no image found' ></img>
   
    </div>
  )
}


export default Signup;
