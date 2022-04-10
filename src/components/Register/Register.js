import React from 'react';

const Register = () => {
    return (
      <div>
        <h3>Please Register</h3>
        <form>
          <input type="text" name="" placeholder="Your Name" />
          <br />
          <input type="email" name="" placeholder="Your Email" />
          <br />
          <input type="password" name="" placeholder="Password" />
          <br />
          <br />
          <input type="submit" value="Register" />
          <br />
        </form>
      </div>
    );
};

export default Register;