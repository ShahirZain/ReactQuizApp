import React, { Component } from 'react';
import TestToBeGiven from './TestToBeGiven';
import history from './history';
import './login.css'

class Login extends Component {

    state={
        tempUserName : "",
        tempUserPassword : "",
        UserName : null,
        UserPassword: null,
    }
 
    temp = (event) =>{            
            let {
                name,value
            }   = event.target  
            name === "password" ? name = "tempUserPassword" : name = "tempUserName"
            this.setState({
                 [name] : value
                })
        }
    
    submit = (e) =>{
        e.preventDefault();
        this.setState({
            UserName : this.state.tempUserName,
            UserPassword : this.state.tempUserPassword
           },()=>{
               if(this.state.UserName === "shahir" && this.state.UserPassword === "zain" ){
            }
           })
           history.push('/TestToBeGiven')
    }



  render() {
    return (
         <div className="login-page">
        <div className="form registered ">
            <form className=" login-form" onSubmit={this.submit}>
                <input type="text" value={this.state.tempUserName} onChange={this.temp}  placeholder="user name" name="userName" />
                <input type="password" value={this.state.tempUserPassword} onChange={this.temp} name="password" id="name" placeholder="password"/>
                <input type="submit" value="LOGIN" className="btn"/>
                <p className="msg">Not Registered? <a href="#">Register</a></p>
            </form> 
        </div>
        </div>

    );
  }
}

export default Login;
