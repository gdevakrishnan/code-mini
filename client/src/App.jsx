import React, { Fragment, useEffect, useState } from 'react'
import Router from './routers/Router'
import appContext from './context/appContext'
import { verifyUserAndGetUser } from './services/serviceWorker';

function App() {
  const [user, setUser] = useState(null);

  const context = {
    user,
    setUser
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

  return (
    <appContext.Provider value={context}>
      <Fragment>
        <Router />
      </Fragment>
    </appContext.Provider>
  )
}

export default App;