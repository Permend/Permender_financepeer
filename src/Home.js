import React , { Component } from "react";
import fire from "./config/fire";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Form from "./fileupload/Form";
import Fileread from "./fireread/Fileread";
import TodoList from "./fireread/Todoread";



class Home extends Component{
constructor(props)
{
    super(props)
    this.state={
        
    }
}
logout(){
    fire.auth().signOut();
}
render()
{
    return(
        <div>
           <h1>You are logged in !!!</h1>
            <Button variant="contained" size="small" onClick={this.logout}>Logout</Button>

            <br />

            <Form/>

            {/* <Fileread/> */}
            {/* <TodoList/> */}
        </div>
    )
}
}
export default Home;