import React, { Fragment, useContext, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';
import validator from 'validator';
import appContext from '../../context/appContext';

function Signin() {
  const initialState = {
    "uname": "",
    "gmail": "",
    "pwd": ""
  }

  const [formDetails, setFormDetails] = useState(initialState);

  const {
    user,
    setUser
  } = useContext(appContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (const key in formDetails) {
      if (formDetails[key] === "") {
        alert(`Enter all the fields`);
        return;
      }
    }

    if (!(validator.isEmail(formDetails["gmail"].trim()))) {
      setMsg("Invalid Email");
      return;
    }

    if (formDetails["pwd"].length < 6) {
      alert("Enter minimum 6 charachters password");
      return;
    }

    const {
      gmail,
      pwd
    } = formDetails;

    await signInWithEmailAndPassword(auth, gmail, pwd)
      .then(async (response) => {
        const userDetails = response.user;
        const token = await userDetails.getIdToken();
        setUser({ ...userDetails, token });
        localStorage.setItem("code-mini-auth", token);
        alert("User login successfull");
        setFormDetails(initialState);
      })
      .catch((e) => {
        console.error(e.message);
      });
  }

  // Continue with google
  const handleGoogle = async (e) => {
    try {
      e.preventDefault();
      const googleAuthProvider = new GoogleAuthProvider();
      await signInWithPopup(auth, googleAuthProvider)
        .then(async (response) => {
          const user = response.user; // User details from google auth
          const token = await user.getIdToken();  // Get the id token of the user
          setUser({ ...user, token });
          localStorage.setItem("code-mini-auth", token);
          alert("User login successfull");
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
          <input
            type="submit"
            value="Login"
            className="btn"
            onClick={(e) => handleSubmit(e)}
          />
          <p className="message">Don't have an accout? <Link to={'/signup'}>Signup</Link></p>
        </form>
      </section>
    </Fragment>
  )
}

export default Signin