import React, { useState } from 'react';
import Navbar from './components/navbar';
import Textform from './components/textform';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light'); // Default mode is 'light'
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggle = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#093678";
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggle={toggle} /> 
      <div className="container my-3">
        <Textform heading="Write Something About You" mode={mode} />
      </div>
    </>
  );
}

export default App;
