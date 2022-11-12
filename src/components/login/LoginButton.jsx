import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithPopup } = useAuth0();
  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={() => loginWithPopup()}>Login</button>
    </div>
  );
};

export default LoginButton;
