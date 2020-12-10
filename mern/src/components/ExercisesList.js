import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import Exercises from "./Exercises"

// const Exercise = props => {
//     <tr>
//         <td>{props.exercise.username}</td>
//         <td>{props.exercise.description}</td>
//         <td>{props.exercise.duration}</td>
//         <td>{props.exercise.date.substring(0, 10)}</td>
//         <td>
//             <Link to={"/edit/"+props.exercise._id}>Edit</Link> | <Link to="" onClick={() => {props.deleteExercise(props.exercise._id)}}>deleteExercise</Link>
//         </td>
//     </tr>
// }
function ExercisesList() {
    const [deleteExercises, setDeleteExercises] = useState("")
    const [exercises, setExercises] = useState([])
    
    useEffect(() => {
        axios.get("http://localhost:4300/exercises/")
            .then(res => {
                setExercises(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const deleteExercise = (id) => {
        axios.delete("http://localhost:4300/exercises/delete/"+id)
            .then((res) => {
                console.log(res.data)
            })
        setExercises(
                exercises.filter(el => el._id !== id)
        )
    }

    return (
        <div>
            <h3>Logged Exercises</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        exercises.map(exercise => (
                            <Exercises exercise={exercise} deleteExercise={deleteExercise} key={exercise._id}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ExercisesList
