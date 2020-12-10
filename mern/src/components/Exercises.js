import React from 'react'
import { Link } from "react-router-dom"

function Exercises(props) {
    return (
        <>
            <tr>
                <td>{props.exercise.username}</td>
                <td>{props.exercise.description}</td>
                <td>{props.exercise.duration}</td>
                <td>{props.exercise.date.substring(0, 10)}</td>
                <td>
                    <Link to={"/edit/"+props.exercise._id}>Edit</Link> | <Link to="" onClick={() => {props.deleteExercise(props.exercise._id)}}>deleteExercise</Link>
                </td>
            </tr>   
        </>
    )
}

export default Exercises
