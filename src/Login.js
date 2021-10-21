import React, { Component } from "react";
import fire from "./config/fire";

import "./Login.css"


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';




class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: "",
            password: ""
        }
    }
    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err);
        })
    }
    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err);
        })
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="container loginpage">
                <form>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="enter email address"
                        onChange={this.handleChange}
                        value={this.state.email}
                    />
                    <input
                        name="password"
                        type="password"
                        onChange={this.handleChange}
                        id="password"
                        placeholder="enter password"
                        value={this.state.password}
                    />
                    <br /><br />
                    <Button variant="contained" size="small" onClick={this.login}>Login</Button>
                    <Button variant="contained" size="small" onClick={this.signup}>Signup</Button>
                </form>

            </div>
        )
    }
}
export default Login;