import React from 'react'

import fire from "../config/fire"

import "./Form.css"

function Form() {
    const onChange = (e) => {
        const file = e.target.files[0];
        const storageRef = fire.storage().ref()
        const fileRef = storageRef.child(file.name)
        fileRef.put(file).then(() => {
            console.log("Uploaded a file")
        })
    }
    return (
        <div className="container formy">
            <input type="file" onChange={onChange}/>
        </div>
    )
}

export default Form
