import React, { useState } from "react";
import "./style.css"

const AddTodo = ({InsertTodos}) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const SubmitTodo =(e) => {
        e.preventDefault()

        const item = {
            title: title,
            description: description
        }
        InsertTodos(item)

        alert("Form Submitted")
    }
    return(
        <>
            <form onSubmit={SubmitTodo} id="AddTodo" className="">
                <div className="mb-3">
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title"/>
                </div>
                <div className="mb-3">
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter Description"/>
                </div>
                <div className="mb-3">
                    <button>AddTodo</button>
                </div>
            </form>
        </>
    )
}

export default AddTodo;