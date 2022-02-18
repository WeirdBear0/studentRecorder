import React from 'react';
import Card from './Card'
import classes from './AddStudent.modules.css'
import Button from './Button'
import { useState } from 'react';
// import classes from './Card.modules.css'
const AddStudent = (props) => {
    const onAddStudent = (event) => {
        event.preventDefault();
        if (studentName.trim() === ""||studentAge.trim().length === 0|| studentBirthday.trim().length ===0|| studentGrade.trim().length === 0 ){
            return
        }
        if(+studentAge < 5){
            return
        }
        console.log(studentAge, studentName, studentBirthday, studentGrade)
        props.onAddStudent(studentAge, studentName, studentBirthday, studentGrade);
        setStudentBirthday("");
        setStudentGrade("");
        setStudentName("");
        setStudentAge("");
    }

    const [studentAge, setStudentAge] = useState("")
    const [studentGrade, setStudentGrade] = useState("")
    const [studentName, setStudentName] = useState("")
    const [studentBirthday, setStudentBirthday] = useState("")

    const ageHandler = (event) => {
        setStudentAge(event.target.value)
    }
    const nameHandler = (event) => {
        setStudentName(event.target.value)
    }
    const birthdayHandler = (event) => {
        setStudentBirthday(event.target.value)
    }
    const gradeHandler = (event) => {
        setStudentGrade(event.target.value)
    }
    const handleFormSubmission = () => {
        console.log(studentAge)
        console.log(studentBirthday)
        console.log(studentGrade)
        console.log(studentName)
    }

    return (
        <Card className = {classes.input}>
            <form onSubmit = {onAddStudent} id = "input">
                <label htmlFor = "studentname"> Student Name </label>
                <input type = "text" placeholder = "Name" onChange = {nameHandler} value = {studentName}></input>
                <label htmlFor = "studentage"> Student Age </label>
                <input type = "number" placeholder = "Age" onChange = {ageHandler} value = {studentAge}></input>
                <label htmlFor = "studentgrade"> Student Grade </label>
                <input type = "text" placeholder = "Grade" onChange = {gradeHandler} value = {studentGrade}></input>
                <label htmlFor = "studentbirthday"> Student Birthday </label>
                <input type = "date" placeholder = "Birthday" onChange = {birthdayHandler} value = {studentBirthday}></input>
                <Button type = "submit" submit = {handleFormSubmission}>Add Student</Button>
            </form>
        </Card>
    )
}

export default AddStudent