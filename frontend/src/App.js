import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter, Link, useNavigate, Outlet } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Numbers from './components/numbers';


function createAlert(){
  alert("You clicked!");
}

function ShowMessage(props){
  if(props.toShow){
    return <h2>My message</h2>
  } else {
    return <h2>Forbidden</h2>
  }
}
const context = React.createContext();
  export const CtxConsumer = context.Consumer;


function App() {
  const userlogin = true;
const context = React.createContext();
const animals = ["snake", "elephant", "giraffe"];

const pStyle = {
  fontSize: "2em",
  color: "red"
}
  if (userlogin) {
  return (



    <div className="App">

<header className="App-header">
        <Header info="hello"/>
        <p  style={pStyle}>main content </p>
        <Numbers />
        < Footer trademark="page by Will" myalert={createAlert}/>
        <ShowMessage toShow={true}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <BrowserRouter>
      <context.Provider value={{animals: animals}}>
      <Routes>
        <Route path="/" component={App} />
        <Route exact path="/header" component={Header} />
        <Route path="/footer" component={Footer} />
      </Routes>
      </context.Provider>
      </BrowserRouter>
    </div>
  );
} else {
  return <h2>Forbidden</h2>
}
}

export default App;
