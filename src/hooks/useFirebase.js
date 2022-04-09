import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import app from '../firebase.init';

const auth = getAuth(app);

const useFirebase = () => {
  const [user, setUser] = useState({});

  const signInWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
      .then(result => {
          setUser(result.user);
      })
      .catch(error => console.log(error.message))
  }

  const handleSignOut = () => {
      signOut(auth)
      .then(res => {
          setUser({});
          console.log('Sign out successfully....');
      })
      .catch(error => console.log(error.message))
  }

   useEffect(() => {
       onAuthStateChanged(auth, res => {
           setUser(res)
       })
   }, []);

  return { user, signInWithGoogle, handleSignOut };

};

export default useFirebase;
