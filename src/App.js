import React, { useEffect } from 'react';
import firebase from './firebase'
import logo from './logo.svg';
import './App.css';



function App() {

  useEffect(() => {
    const messaging = firebase.messaging()
    messaging.requestPermission()
      .then(async function() {
        const token = await messaging.getToken();
        console.log(token);
      })
      .catch(function(err) {
        console.log("Unable to get permission to notify.", err);
      });
    navigator.serviceWorker.addEventListener("message", (message) => console.log(message));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
