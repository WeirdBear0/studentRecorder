import React from "react";

const StudentList = (props) => {
    return <ul>
        {props.students.map(student => <li key={student.id}>{student.name} is {student.age} years old, born on {student.bday} and is in grade {student.grade}</li>)}
    </ul>
}

export default StudentList