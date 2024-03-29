import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase.init";

const auth = getAuth(app)

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || '/';
  console.log(location.state);
  
  const handleGoogleSignIn = () => {
      signInWithGoogle()
      .then(() => {
        navigate(from, {replace: true});
      })
  }

  return (
    <div>
      <h3>Please Login</h3>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
      <br />
      <br />
      <form>
        <input type="email" name="" placeholder="Your Email" />
        <br />
        <input type="password" name="" placeholder="Password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
