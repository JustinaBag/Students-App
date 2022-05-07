import React, { useState, useEffect } from 'react';
import StudentRow from "./StudentRow";
import { Table }  from "reactstrap";

const url = "http://localhost:3000/api/v1/students";

function StudentList() {
    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

  const getStudent = async () => {
    await fetch(url) 
    .then((response) => response.json()) 
    .then ((result) => {
    setStudents(result.data.students);
    setIsLoading(false);
    })
    .catch((error) => console.log(error));
  };

  useEffect(() => {
      getStudent();
  }, []);

  if (isLoading) {
      return <div>Loading...</div>
  }

const studentsRow = students.map((student) => {
    return (
        <StudentRow 
        key={student._id}
        id={student._id}
        name={student.name}
        surname={student.surname}
        birthdate={student.birthdate}
        town={student.town}
        group={student.group}
        program={student.program}
        />
    );
});

return (
    <Table bordered className="table table-striped table-hover">
    <thead>
    <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Birthdate</th>
        <th>Town</th>
        <th>Program</th>
        <th>Group</th>
        <th className="text-warning">Update</th>
        <th className="text-warning">Delete</th>
    </tr>
    </thead>
    <tbody>{studentsRow}</tbody>
    </Table>
)
}
export default StudentList;
