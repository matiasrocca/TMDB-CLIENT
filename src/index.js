import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import "bulma/css/bulma.min.css";
import "swiper/css/bundle";

export const UserContext = createContext();
export const TypeContext = createContext();

const Index = () => {
  const [user, setUser] = useState(null)
  const [type, setType] = useState("movie")

  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser}}>
        <TypeContext.Provider value ={{type, setType}}>
            <App/>
        </TypeContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  )

}


ReactDOM.render( <Index/>, document.getElementById("root") );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();