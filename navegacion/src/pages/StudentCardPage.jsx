import React from "react";
import StudentCard from "./StudentCard";  // Ajusta la ruta si es necesario

const StudentCardPage = () => {
  const student = {
    name: "Kevin Fernando Portillo Avelar",
    age: 18,
    specialty: "Desarrollo de Software",
    school: "Instituto Técnico Ricaldone",
    programs: ["C#", "HTML", "CSS", "JavaScript", "MongoDB", "Kotlin", "Java", "Oracle"],
    photo: "https://staticg.sportskeeda.com/editor/2021/06/064a3-16233087821077-800.jpg"  // Puedes poner aquí la URL de la foto
  };

  return (
    <div className="student-card-page">
      <h1>Mi Información Personal</h1>
      <StudentCard 
        name={student.name} 
        age={student.age} 
        specialty={student.specialty} 
        school={student.school} 
        programs={student.programs} 
        photo={student.photo} 
      />
    </div>
  );
};

export default StudentCardPage;
