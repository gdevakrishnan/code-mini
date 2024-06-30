import React, { Fragment } from 'react'
import Features from '../components/Features'

function Dashboard() {
  return (
    <Fragment>
      <section className="hero hero_page">
        <div className="bg"></div>
        <h1 className="hero_title">AI for every programmers</h1>
        <p className="hero_sub_title">Build with Google Gemini to make <span>helpful for everyone</span></p>
        <button className="btn">Get Started</button>
      </section>
      <Features />
    </Fragment>
  )
}

export default Dashboard