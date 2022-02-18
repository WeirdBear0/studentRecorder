import React, { useState } from 'react';
import './App.css'
import AddStudent from './components/AddStudent';
import Card from './components/Card';
import StudentList from './components/StudentList';
function App() {
    const [studentList, setStudentList] = useState([]);
    const addStudentHandler = (sName, sGrade, sBday, sAge) => {
        setStudentList((previousStudentList) => {
            return [...previousStudentList, {id: Math.random().toString(), name: sName, age: sAge, grade: sGrade, bday : sBday}]
        })
    }
    return(
        <div>
            <h2>Welcome to App</h2>
            <AddStudent onAddStudent = {addStudentHandler}/>
            <StudentList students = {[studentList]}/>
        </div>
    )
}

export default App;