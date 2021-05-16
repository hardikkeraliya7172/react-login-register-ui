import React, { Component } from "react";
import'./signup.css';

export default class SignUp extends Component {
    render() {
        return (
            <div class="signup-container">
            <form>
                <h2>Register</h2>
            <div class="register">    
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
            </div>
            <div class="btn">    
                <button type="button" class="btn btn-primary btn-block">SIgn Up</button>
            </div>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">log in?</a>
                </p>
            </form>
            </div>
        );
    }
}