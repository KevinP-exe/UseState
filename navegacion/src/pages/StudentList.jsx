import React, { useState } from "react";
import "../components/StudentList.css";

// StudentList.jsx

const StudentList = () => {
    // Estado para manejar la lista de estudiantes
    const [students, setStudents] = useState([]);
    // Estado para manejar los valores de los inputs
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [idCard, setIdCard] = useState("");

    // Función para agregar un nuevo estudiante
    const addStudent = () => {
        if (name.trim() === "" || age.trim() === "" || idCard.trim() === "") return; // Evitar agregar estudiantes con datos vacíos
        setStudents([
            ...students,
            { id: Date.now(), name, age, idCard }
        ]);
        setName(""); // Limpiar el input del nombre
        setAge("");  // Limpiar el input de la edad
        setIdCard(""); // Limpiar el input del carnet
    };

    return (
        <div className="student-container">
            <h1>Student List</h1>
            <div className="student-inputs">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Student Name"
                />
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Student Age"
                />
                <input
                    type="text"
                    value={idCard}
                    onChange={(e) => setIdCard(e.target.value)}
                    placeholder="Student ID Card"
                />
                <button onClick={addStudent}>Add Student</button>
            </div>
            <ul className="student-list">
                {students.map((student) => (
                    <li key={student.id}>
                        <strong>Name:</strong> {student.name} | 
                        <strong> Age:</strong> {student.age} | 
                        <strong> ID:</strong> {student.idCard}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;