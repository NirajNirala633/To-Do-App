import React from "react";
import "./style.css"

const AllTodos = (props) => {

    const DeleteTodoHandler =(id) => {
        props.DeleteTodo(id)
        alert(`Todo ${id} is deleted.`)
    }
    return(
        <>
        <section id="AllTodos" className="">
            <table border={'1'} className='table' width={'50%'}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Descriptsion</th>
                        <th>Status</th>
                        <th>Deleted</th>
                        <th>Completed</th>


                    </tr>
                </thead>
                <tbody>
               {
                props.Todos.map((c, i) =>{
                    return  <tr>
                    <td>{i+1}</td>
                    <td>{c.title}</td>
                    <td>{c.description}</td>
                    <td>{c.isComplete ?'Completed':'Incompleted'}</td>
                    <td>
                        <button onClick={() => DeleteTodoHandler(c.id)}>
                            Deleted
                        </button>
                    </td>

                    <td>
                       {!c.isComplete && <button onClick={() => props.UpdateTodo(c.id)} className="button2">
                            Update
                        </button>
                }
                    </td>
                    </tr>
                })
               }
                </tbody>
            </table>
        </section>

        </>
    )
}

export default AllTodos;