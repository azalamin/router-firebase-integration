import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Products = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h1>Knock! Knock! Who is there?</h1>
            <h2>{user ? user.displayName : 'No body'}</h2>
        </div>
    );
};

export default Products;