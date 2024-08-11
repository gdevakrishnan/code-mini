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
                    <Route path='/signup' element={(!user) ? <Signup /> : <PageNotFound />} />
                    <Route path='/signin' element={(!user) ? <Signin /> : <PageNotFound />} />
                    <Route path='/code' element={(user && user.uname) ? <CodeNav /> : <PageNotFound />} />
                    <Route path='/code/code-debug' element={(user && user.uname) ? <CodeDebug /> : <PageNotFound />} />
                    <Route path='/code/code-comments' element={(user && user.uname) ? <CodeComments /> : <PageNotFound />} />
                    <Route path='/code/daily-snippet' element={(user && user.uname) ? <DailySnippet /> : <PageNotFound />} />
                    <Route path='/code/code-review' element={(user && user.uname) ? <CodeReview /> : <PageNotFound />} />
                    <Route path='/code/project-initialization' element={(user && user.uname) ? <ProjectInitialization /> : <PageNotFound />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
                <Outlet />
            </BrowserRouter>
        </Fragment>
    )
}

export default Router