import React, { Component } from 'react';
import PreloginHeader from '../prelogin/PreloginHeader';
import PreloginFooter from '../prelogin/PreloginFooter';
import { Link, redirect, useNavigate } from "react-router-dom";

function myParams(Component){
  return props=><Component navHook={useNavigate()}/>;
}
class  ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {email:'',psw:'', confirmpsw:''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.redirect = this.redirect.bind(this)
      }
    
      handleChange(event) {
        this.setState({ [event.target.name] : event.target.value});
      }
    
      handleSubmit() {
        let password=this.state.psw;
        let repeatpass=this.state.confirmpsw;
        console.log(password);
        console.log(repeatpass);
        if (password==repeatpass) {
            alert(`New manager has been created `);
            this.props.navHook('/login')
          }
        else{
          alert(`Passwords do not Match. Try Again!`);
        }
        // navigate('/Contact');
      }
    state = {  } 
    render() { 
        return (            <div>
            <link rel="stylesheet" href="header_footer_sidebar.css"/>

            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

            <div className="parent">
            <PreloginHeader></PreloginHeader>
            <div className="main">
                <div className ="content">
            <div className="main">
            <form onSubmit={this.handleSubmit}>
              <div className="containers">
                <h1 >Forgot Password</h1>
            
                <label for="email"><b>Email</b></label>
                <input type="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter Email" name="email" id="email" required/>
            
                <label for="psw"><b>New Password</b></label>
                <input type="password" value={this.state.psw} onChange={this.handleChange} placeholder="Enter Password" name="psw" id="psw" required/>
            
                <label for="psw-repeat"><b>Confirm Password</b></label>
                <input type="password" value={this.state.confirmpsw} onChange={this.handleChange} maxlength="8" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8}" placeholder="Repeat Password" name="confirmpsw" id="psw-repeat" required/>          
                <button type="submit" className="registerbtn">Change Password</button>
              
              </div>
            </form>
          </div>
          </div>  
            </div>
            <PreloginFooter/>                            </div>

            </div>


        );
    }
}
 
export default myParams(ForgotPassword);