import React, { Component } from "react";
import './login.css';

export default class Login extends Component {
    render() {
        return (
            <div class="login-container">
                <form>
                    <h2>Log in</h2>
                    <div class="login">
                        <div className="form-group">
                            <label >Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>
                        <div className="form-group">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox-1" />
                                <label class="custom-control-label" for="checkbox-1"> Remember Me</label>
                            </div>
                        </div>
                    </div>
                     <div class="btn">    
                        <button type="button" class="btn btn-primary btn-block">Sign In</button>
                    </div>
                            
                        <p className="forgot-password"> <a href="#">Forgot password?</a></p>
                   
                </form>
                </div>
           
        );
    }
}