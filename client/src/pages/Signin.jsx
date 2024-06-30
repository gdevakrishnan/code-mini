import React, { Fragment } from 'react'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

function Signin() {
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
          <input type="submit" value="Login" className="btn" />
          <p className="message">Don't have an accout? <Link to={'/signup'}>Signup</Link></p>
        </form>
      </section>
    </Fragment>
  )
}

export default Signin