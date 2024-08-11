import React, { Fragment, useContext } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Signup from '../pages/user/Signup'
import Signin from '../pages/user/Signin'
import Navbar from '../components/Navbar'
import CodeReview from '../pages/code/CodeReview'
import PageNotFound from '../pages/PageNotFound'
import appContext from '../context/appContext'

function Router() {
    const {
        user
    } = useContext(appContext);

    return (
        <Fragment>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/signup' element={(!user) ? <Signup /> : <PageNotFound />} />
                    <Route path='/signin' element={(!user) ? <Signin /> : <PageNotFound />} />
                    <Route path='/code' element={(user && user.uname) ? <CodeReview /> : <PageNotFound />} />
                </Routes>
                <Outlet />
            </BrowserRouter>
        </Fragment>
    )
}

export default Router