import React, { Fragment, useContext } from 'react'
import Features from '../components/Features'
import { Link } from 'react-router-dom'
import appContext from '../context/appContext'

function Dashboard() {
  const {
    user
  } = useContext(appContext);

  return (
    <Fragment>
      <section className="hero hero_page">
        <div className="bg"></div>
        <h1 className="hero_title">AI for every programmers</h1>
        <p className="hero_sub_title">Build with Google Gemini to make <span>helpful for everyone</span></p>
        <Link to={(user && user.uname && user.gmail) ? '/code' : '/signin'}>
          <button className="btn">Get Started</button>
        </Link>
      </section>
      <Features />
    </Fragment>
  )
}

export default Dashboard