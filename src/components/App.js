import React, { useState } from "react";
import './../styles/App.css';
import Auth from "./Auth";
import AuthContext from "./AuthContext";

const App = () => {
  //using the state to dynamicallly pass the values to the context

  const [authstatus, setauthstatus] = useState(false);
  const login = () => {
    setauthstatus(true);
  };
  return (
    <React.Fragment>
      <AuthContext.Provider value={{ status: authstatus, login: login }}>
        <Auth />
      </AuthContext.Provider>
    </React.Fragment>
  );
};
export default App;
