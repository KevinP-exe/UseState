import {BrowserRouter as Router, Routes, Route} 
from 'react-router'

import Home from './pages/Home'
import Calculator from './pages/Calculator'
import Components from './pages/Components'
import ToDoList from './pages/ToDoList'
import StudentList from './pages/StudentList'
import React from "react";
import StudentCard from "./pages/StudentCardPage";
import Nav from './components/Nav'

function App() {
  
  return (
    <>

  <Router>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/components" element={<Components />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/studentlist" element={<StudentList />} />
        <Route path="/studentcard" element={<StudentCard />} />
      </Routes>
  </Router>
 
    </>
  )
}

export default App
