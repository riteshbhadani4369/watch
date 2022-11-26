import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Home from './Home';
const axios = require('axios');

const AdminLogin = () => {

    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");
    const navigate = useNavigate();
    const login = (e) =>{
        e.preventDefault();

        axios.post('http://localhost:5000/adminLogin', {
            name: Email,
            password:Password
          })
          .then(function (response) {
            console.log(response.data);
             navigate('/');
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <>
            <div className="hold-transition login-page">
                <div className="login-box">
                    {/* /.login-logo */}
                    <div className="card card-outline card-primary">
                        <div className="card-header text-center">
                            <a href="#" className="h1"><b>Admin</b>LTE</a>
                        </div>
                        <div className="card-body">
                            <p className="login-box-msg">Sign in to start your session</p>
                            <form action="" method="post">
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)}  />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="remember" />
                                            <label htmlFor="remember">
                                                Remember Me
                                            </label>
                                        </div>
                                    </div>
                                    {/* /.col */}
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-primary btn-block" onClick={login}>Sign In</button>
                                    </div>
                                    {/* /.col */}
                                </div>
                            </form>
                          
                            {/* /.social-auth-links */}
                            <p className="mb-1">
                                <a href="forgot-password.html">I forgot my password</a>
                            </p>
                            <p className="mb-0">
                                <Link to="/Adminregister" className="text-center">Register a new membership</Link>
                            </p>
                        </div>
                        {/* /.card-body */}
                    </div>
                    {/* /.card */}
                </div>
                {/* /.login-box */}
            </div>

        </>
    )
}

export default AdminLogin;