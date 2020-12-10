import React, { useState, useEffect} from 'react'
import axios from "axios"

function CreateUser() {
    const [username, setUsername] =useState("")

    onsubmit = (e) => {
        e.preventDefault();
        const user = {
            username
        }
        console.log(user.username)

        axios.post("http://localhost:4300/users/add", user)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        setUsername("") 
    }
    return (
        <div className="container">
            <h3>Create New User</h3>
            <form onSubmit={onsubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <input type="text"
                            required
                            className="form-control"
                            value={username}
                            onChange={(e) => {setUsername(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Create User"
                            className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default CreateUser
