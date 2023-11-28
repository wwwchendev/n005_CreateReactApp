import { useEffect, useState } from 'react';
//外部套件
import axios from 'axios';
//assets
import logo from './assets/logo.svg';
import './assets/App.css';
import './assets/all.scss';
//元件s
import Input from './components/Input.jsx';

function App() {

  const [text,setText]=useState('')
  const onChangeHandler = (e)=>{
    setText(e.target.value)
  }

  useEffect(()=>{
    (async()=>{
      const path = process.env.REACT_APP_PATH;
      const res = await axios.get(path)
      console.log(JSON.stringify(res.data))
    })() },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className='btn btn-primary'>click</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Input 
              id="sampleText"
              text="這是一個input"
              value={text}
              onChangeHandler={onChangeHandler}
        />
      </header>
    </div>
  );
}

export default App;
