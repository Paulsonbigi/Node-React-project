import React, {useState, useEffect, useRef} from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import axios from "axios"
import { withRouter } from "react-router-dom"
import { SentimentSatisfied } from '@material-ui/icons'

function EditExercise() {
    const inputEl = useRef(null)
    const [username, setUsername] = useState("")
    const [description, setDescription] = useState("")
    const [duration, setDuration] = useState(0)
    const [date, setDate] = useState(new Date())
    const [users, setUsers] = useState([])
    const [exercise, setExercise] = useState([])
    const details = {
        username,
        description, duration, date, users
    }

    useEffect((props, ownProps) => {
        const path = window.location.pathname.split("/")
        const id = path[path.length - 1]
        axios.get(`http://loaclhost:4300/exercises/${id}`)
            .then(res => {
                setUsername(res.data.username)
                setDescription(res.data.description)
                setDuration(res.data.duration)
                setDate(res.data.date)
            })
        .catch(err => console.log(err))

        axios.get("http://localhost:4300/users/")
            .then(res => {
                if (res.data.length > 0) {
                    setUsers(
                            res.data.map(res => res.username)
                    )
                 }
            })
        
    }, [])
    onsubmit = (e, props ) => {
        e.preventDefault();
        inputEl.current.focus();
        const exercise = {
            username, description, date, duration
        }
        console.log(exercise);
        const path = window.location.pathname.split("/")
        const id = path[path.length - 1]
        axios.put(`http://localhost:4300/exercises/update"/${id}`, exercise)
            .then((res) => res.data)
        window.location = "/"  
    }
    return (
        <div className="container">
            <h3>Edit Exercise Log</h3>
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
                    <input type="submit" value="Edit Exercise Log"
                            className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default withRouter(EditExercise)
