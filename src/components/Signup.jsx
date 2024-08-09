import React, { useState } from 'react'
import logo from "../assets/logo.png"
import model from "../assets/img.png"

function Signup() {
    let [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    let [error, setError] = useState({
        emailError: "",
        passwordError: ""
    })
    // & regular expressions
    let emailValidate = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/
    let passwordValidate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    // & email value
    function emailValue(e) {
        console.log(e.target.value);
        setFormData({ email: e.target.value, password: formData.password })
    }
    // & password value
    function passwordValue(e) {
        console.log(e.target.value);
        setFormData({ email: formData.email, password: e.target.value })
    }
    // & button click function
    function submit() {
        error.emailError = ""
        error.passwordError = ""
        if (formData.email === "" && formData.password === '') {
            setError({ emailError: "Enter email", passwordError: "Enter password" })
            return
        }
        if(formData.email === ""){
            setError({ emailError: "Enter email", passwordError:error.passwordError })
            return
        }
        if(formData.password === ""){
            setError({ emailError: error.emailError, passwordError: "Enter Password" })
            return
        }
        
        if(!emailValidate.test(formData.email)){
            setError({emailError:"Enter proper email",passwordError:error.passwordError})
            return
        }
        if(!passwordValidate.test(formData.password)){
            setError({emailError:error.emailError,passwordError:"Enter proper password"})
            return
        }
        
    }

    console.log(formData);
    return (
        <div className='signup'>

            <div className="box imgbox">
                <div className="innerBox">
                    <img className='logo' src={logo} alt="logo" />
                    <div className="text">
                        <h1>Generate detailed reports with just one click</h1>
                    </div>
                    <div className="modelImage">
                        <img className='modelImage' src={model} alt="modelImage" />
                    </div>

                </div>

            </div>
            <div className="box">
                <div className="innerBox secondBox">
                    {/* sign heading */}
                    <div className="SignupHeading">
                        <h1>Sign In</h1>
                        <h3>Sign in to your account</h3>
                    </div>
                    {/* SignUpWithGoogle  */}
                    <div className="SignUpWithGoogle">
                        <button> <i class="fa-brands fa-google"></i> Sign In with Google</button>
                        <button><i class="fa-brands fa-apple"></i>   Sign In with Apple</button>
                    </div>
                    {/* form  */}
                    <div className="form">
                        <h3>Email address</h3>
                        <input onChange={emailValue} type="text" />
                        <p>{error.emailError}</p>
                        <h3>Password</h3>
                        <input onChange={passwordValue} type="password" />
                        <p>{error.passwordError}</p>
                        <a href="#">Forgot password?</a>
                        <button onClick={submit}>Sign In</button>
                    </div>
                    <div className="register">
                        <h5>Don't have an account ? <a href="#">Register here </a></h5>
                    </div>
                    {/* Social links */}
                    <div className="socialLinks">
                        <button><i class="fa-brands fa-github"></i></button>
                        <button><i class="fa-brands fa-twitter"></i></button>
                        <button><i class="fa-brands fa-linkedin"></i></button>
                        <button><i class="fa-brands fa-discord"></i></button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signup