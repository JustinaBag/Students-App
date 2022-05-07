import React from 'react';

function StudentRow({name, surname, birthdate, program, group, town, id}) {
    
    const deleteStudent = (id) => {
        fetch(`http://localhost:8000/api/v1/students/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => console.log(res));
    };

    return (
        <tr>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{birthdate}</td>
            <td>{town}</td>
            <td>{group}</td>
            <td>{program}</td>
            <td><button className="btn btn-outline-warning">Update</button></td>
            <td><button className="btn btn-outline-warning" onClick={()=>deleteStudent(id)}>Delete</button></td>
        </tr>
    )
}

export default StudentRow;