import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';

function Signup() {
  const initialState = {
    "uname": "",
    "gmail": "",
    "pwd": "",
    "cpwd": ""
  }
  
  const [formDetails, setFormDetails] = useState(initialState);
  const [user, setUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formDetails);
  }

  const handleGoogle = async (e) => {
    try {
      e.preventDefault();
      const googleAuthProvider = new GoogleAuthProvider();
      await signInWithPopup(auth, googleAuthProvider)
        .then(async (response) => {
          const user = response.user; // User details from google auth
          const token = await user.getIdToken();  // Get the id token of the user
          setUser({...user, token});
        })
        .catch(e => {
          console.log(e.message);
        });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Fragment>
      <section className="page form_page">
        <form onSubmit={(e) => handleSubmit(e)}>
          <button className="btn google_btn" onClick={(e) => handleGoogle(e)}>
            <FcGoogle className='google' /> Continue With Google
          </button>

          <div className="divider">
            <p className="or">or</p>
          </div>

          <div className="form_group">
            <label htmlFor="uname">Username</label>
            <input
              type="text"
              name="uname"
              id="uname"
              value={formDetails.uname}
              onChange={(e) => setFormDetails({ ...formDetails, [e.target.id]: e.target.value })}
            />
          </div>
          <div className="form_group">
            <label htmlFor="gmail">E-Mail</label>
            <input
              type="email"
              name="gmail"
              id="gmail"
              value={formDetails.gmail}
              onChange={(e) => setFormDetails({ ...formDetails, [e.target.id]: e.target.value })}
            />
          </div>
          <div className="form_group">
            <label htmlFor="pwd">Password</label>
            <input
              type="password"
              name="pwd"
              id="pwd"
              value={formDetails.pwd}
              onChange={(e) => setFormDetails({ ...formDetails, [e.target.id]: e.target.value })}
            />
          </div>
          <div className="form_group">
            <label htmlFor="cpwd">Re-Enter</label>
            <input
              type="password"
              name="cpwd"
              id="cpwd"
              value={formDetails.cpwd}
              onChange={(e) => setFormDetails({ ...formDetails, [e.target.id]: e.target.value })}
            />
          </div>
          <input
            type="submit"
            value="Register"
            className="btn"
            onClick={(e) => handleSubmit(e)}
          />
          <p className="message">Already have an accout? <Link to={'/signin'}>Signin</Link></p>
        </form>
      </section>
    </Fragment>
  )
}

export default Signup