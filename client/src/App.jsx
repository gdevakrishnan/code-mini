import React, { Fragment, useEffect, useState } from 'react'
import Router from './routers/Router'
import appContext from './context/appContext'
import { verifyUserAndGetUser } from './services/serviceWorker';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [user, setUser] = useState(null);
  const [msg, setMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const context = {
    user,
    setUser,
    setMsg,
    setErrorMsg
  };

  const getUserDetails = async () => {
    const token = localStorage.getItem('code-mini-auth');

    if (token) {
      verifyUserAndGetUser(token)
        .then((response) => {
          setUser(response);
        })
        .catch((e) => {
          console.log(e.message);
          setUser(null);
        });
    } else {
      setUser(null);
      getUserDetails();
    }
  }

  useEffect(() => {
    getUserDetails();
  }, [user, setUser])

  useEffect(() => {
    msg && (
      toast.success(msg, { autoClose: 4000 })
    )
    setMsg(null)
  }, [msg]);

  useEffect(() => {
    errorMsg && (
      toast.error(errorMsg, { autoClose: 4000 })
    )
    setErrorMsg(null)
  }, [errorMsg]);

  return (
    <Fragment>
      <ToastContainer />
      <appContext.Provider value={context}>
        <Router />
      </appContext.Provider>
    </Fragment>
  )
}

export default App;