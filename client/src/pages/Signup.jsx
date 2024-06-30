import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";

function Signup() {
  return (
    <Fragment>
      <section className="page form_page">
        <form>
          <button className="btn google_btn">
            <FcGoogle className='google'/> Continue With Google
          </button>
          <div className="divider">
            <p className="or">or</p>
          </div>
          <div className="form_group">
            <label htmlFor="uname">Username</label>
            <input type="text" name="uname" id="uname" />
          </div>
          <div className="form_group">
            <label htmlFor="gmail">E-Mail</label>
            <input type="email" name="gmail" id="gmail" />
          </div>
          <div className="form_group">
            <label htmlFor="pwd">Password</label>
            <input type="password" name="pwd" id="pwd" />
          </div>
          <div className="form_group">
            <label htmlFor="cpwd">Re-Enter</label>
            <input type="password" name="cpwd" id="cpwd" />
          </div>
          <input type="submit" value="Register" className="btn" />
          <p className="message">Already have an accout? <Link to={'/signin'}>Signin</Link></p>
        </form>
      </section>
    </Fragment>
  )
}

export default Signup