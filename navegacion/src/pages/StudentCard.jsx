import React from "react";
import "../components/StudentCard.css";

const StudentCard = ({ name, age, specialty, school, programs, photo }) => {
    return (
        <div className="student-card">
            <div className="card-header">
                {photo ? (
                    <img src={photo} alt="Foto de perfil" className="student-photo" />
                ) : (
                    <div className="placeholder-photo">Foto</div>
                )}
            </div>
            <div className="card-content">
                <h2>Información Personal</h2>
                <div className="card-item">
                    <strong>Nombre:</strong> {name}
                </div>
                <div className="card-item">
                    <strong>Edad:</strong> {age} años
                </div>
                <div className="card-item">
                    <strong>Especialidad:</strong> {specialty}
                </div>
                <div className="card-item">
                    <strong>Colegio:</strong> {school}
                </div>
                <div className="card-item">
                    <strong>Programas aprendidos:</strong> {programs.join(", ")}
                </div>
            </div>
        </div>
    );
};

export default StudentCard;

