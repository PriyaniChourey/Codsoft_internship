import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../Firebase/firebase.config';

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const handleLogin = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
        const user = result.user;
    }).catch((error) => {
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

const AuthPage = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="mb-6 text-3xl font-bold text-center">{isSignup ? 'Sign Up' : 'Login'} to Job Portal</h2>

                {isSignup && (
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:border-blue-500"
                    />
                )}

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:border-blue-500"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 mb-6 border rounded focus:outline-none focus:border-blue-500"
                />

                <button
                    className="w-full px-6 py-3 mb-4 text-white bg-blue-600 rounded hover:bg-blue-700"
                    onClick={handleLogin}
                >
                    {isSignup ? 'Sign Up' : 'Login with Google'}
                </button>

                <div className="text-center">
                    <p className="text-gray-600">
                        {isSignup ? 'Already have an account?' : "Don't have an account?"}
                        <button
                            className="ml-1 text-blue-500 hover:underline"
                            onClick={() => setIsSignup(!isSignup)}
                        >
                            {isSignup ? 'Login' : 'Sign Up'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;