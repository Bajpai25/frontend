import React from 'react'
import Login from './assets/Login'
import { Routes,Route } from 'react-router-dom'
import Create from './assets/Create'
import Employee from "./assets/Employee"
import Add from "./assets/Add"
import Employee_edit from './assets/Employee_edit'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/employee' element={<Employee/>}></Route>
        <Route path="/add" element={<Add/>}></Route>
        <Route path="/employee_edit/:id" element={<Employee_edit/>}></Route>
      </Routes>
    </div>
  )
}

export default App