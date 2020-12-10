import React, {useState, useEffect, useRef} from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import axios from "axios"

function CreateExercise() {
    const inputEl = useRef(null)
    const [username, setUsername] =useState("")
    const [description, setDescription] = useState("")
    const [duration, setDuration] = useState(0)
    const [date, setDate] = useState(new Date())
    const [users, setUsers] = useState([])
    const details = {
        username,
        description, duration, date, users
    }

    useEffect(() => {
        setUsers([])

        axios.get("http://localhost:4300/users/")
            .then(res => {
                if (res.data.length > 0) {
                    setUsers(
                            res.data.map(res => res.username)
                    )
                        setUsername({
                            username: res.data[0].username
                        })
                 }
            })
        
    }, [])
    onsubmit = (e) => {
        e.preventDefault();
        inputEl.current.focus();
        const exercise = {
            username, description, date, duration
        }
        console.log(exercise);
        axios.post("http://localhost:4300/exercises/add/", exercise)
            .then((res => {
                console.log(res.data);
            }))
        window.location = "/"  
    }
    return (
        <div className="container">
            <h3>Create New Exercise Log</h3>
            <form onSubmit={onsubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <select value={username}
                            ref={inputEl} 
                            required 
                            className="form-control"
                            onChange={(e) => {setUsername(e.target.value)}}>
                                {
                                    users.map(user=>(
                                        <option
                                            key={user}
                                            value={user}>
                                                {user}
                                        </option>
                                    ))
                                }
                            </select>
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text"
                            required
                            className="form-control"
                            value={description}
                            onChange={(e) => {setDescription(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label>Duration: </label>
                    <input type="text"
                            required
                            className="form-control"
                            value={duration}
                            onChange={(e) => {setDuration(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            selected={date}
                            onChange={(choose) => {setDate(choose)}}/>
                    </div>
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Exercise Log"
                            className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default CreateExercise
