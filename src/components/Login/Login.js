import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase();
    return (
      <div>
        <h3>Please Login</h3>
        <button onClick={signInWithGoogle}>Google Sign In</button>
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