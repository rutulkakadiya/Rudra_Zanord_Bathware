import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import AdminLogin from './AdminPages/AdminLogin'
import Dashboard from './AdminPages/MainDashboard'

export default function AdminRoutes() {
  return (
    <ThemeProvider>
      <div>
          <Routes>
              <Route path='/' element={<AdminLogin/>}></Route>
              <Route path='/dashboard' element={<Dashboard/>}></Route>
          </Routes>
      </div>
    </ThemeProvider>
  )
}
