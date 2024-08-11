import React, { Fragment, useContext } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Signup from '../pages/user/Signup'
import Signin from '../pages/user/Signin'
import Navbar from '../components/Navbar'
import CodeNav from '../pages/CodeNav'

import CodeDebug from '../pages/code/CodeDebug'
import CodeComments from '../pages/code/CodeComments'
import DailySnippet from '../pages/code/DailySinppet'
import CodeReview from '../pages/code/CodeReview'
import ProjectInitialization from '../pages/code/ProjectInitialization'
import appContext from '../context/appContext'
import PageNotFound from '../pages/PageNotFound'

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
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/signin' element={<Signin />} />
                    <Route path='/code' element={<CodeNav />} />
                    <Route path='/code/code-debug' element={<CodeDebug />} />
                    <Route path='/code/code-comments' element={<CodeComments />} />
                    <Route path='/code/daily-snippet' element={<DailySnippet />} />
                    <Route path='/code/code-review' element={<CodeReview />} />
                    <Route path='/code/project-initialization' element={<ProjectInitialization />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
                <Outlet />
            </BrowserRouter>
        </Fragment>
    )
}

export default Router