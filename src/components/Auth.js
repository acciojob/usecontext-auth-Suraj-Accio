import React, { useContext } from "react";
import AuthContext from "./AuthContext";

const Auth = () => {
  const auth = useContext(AuthContext);
  console.log(auth.status);
  return (
    <div>
      <h1>Click on the checkbox to get authenticated</h1>
      {auth.status ? (
        <p class="authText">You are now authenticated, you can proceed</p>
      ) : (
        <p>you are not authenticated</p>
      )}
      <div class="verify">
        <input
          type="checkbox"
          id="robot"
          name="robot"
          value="validate"
          onClick={auth.login}
        />
        <span class="check">I'm not a robot</span>
      </div>
    </div>
  );
};
export default Auth;
