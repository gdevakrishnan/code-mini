import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Signup from '../pages/Signup'
import Signin from '../pages/Signin'
import Navbar from '../components/Navbar'

function Router() {
    return (
        <Fragment>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/signin' element={<Signin />} />
                </Routes>
                <Outlet />
            </BrowserRouter>
        </Fragment>
    )
}

export default Router