import React, { useContext, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from '../../FirebaseConfig/firebase.config';
import { useForm } from "react-hook-form";
import './Login.css'
import { userContext } from '../../App';
import { useNavigate } from "react-router-dom";

initializeApp(firebaseConfig);

const Login = () => {

    const auth = getAuth();
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })
    const [userLoggedIn, setUserLoggedIn] = useContext(userContext)
    const [newUser, setNewUser] = useState(true)
    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();
    const onSubmit = data => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(auth, user.email, user.password)
                .then(() => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setUserLoggedIn(newUserInfo)
                    navigate(-2, { replace: true });
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = 'This email address is already in another account'
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                    console.log(error);
                });
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(auth, user.email, user.password)
                .then(() => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setUserLoggedIn(newUserInfo)
                    navigate(-2, { replace: true });

                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = 'Invalid Email Or Password'
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                    console.log(error);
                });
        }

    };

    const handleBlur = (e) => {
        const newUserInfo = { ...user }
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo)
    }

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                const { displayName, email } = user;
                const googleSignedUser = {
                    isSignedIn: false,
                    name: displayName,
                    email: email
                }
                googleSignedUser.error = '';
                googleSignedUser.success = true;
                setUser(googleSignedUser)
                setUserLoggedIn(googleSignedUser);
                navigate(-2, { replace: true });

            }).catch((error) => {
                console.log(errors);
            });
    }
    return (
        <div className='loginContainer'>
            <form onSubmit={handleSubmit(onSubmit)} className='signupForm'>
                {
                    newUser ? <h2>Sign up</h2> : <h2>Log in</h2>
                }
                {
                    newUser && <>
                        <label htmlFor="name">Name</label><br />
                        <input name='name' {...register("name", { required: true })} placeholder='Name' onBlur={handleBlur} />
                        {errors.name && <span>* Name required</span>} <br /></>
                }
                <label htmlFor="email">Email</label><br />
                <input type='email' {...register("email", { required: true })} onBlur={handleBlur} />
                {errors.email && <span>* Email required</span>} <br />

                <label htmlFor="password">Password</label><br />
                <input type='password' {...register("password", { required: true })} onBlur={handleBlur} />
                {errors.password && <span>* Password required</span>} <br />

                <input type="submit" value={newUser ? ' Sign up' : 'Log in'} />
                <p>New to Doctors Portal? <a style={{ 'color': '#19D3AE' }} onClick={() => setNewUser(!newUser)}>{newUser ? 'Create new account' : 'Log in'}</a></p>
            </form>
            <div className="devide">
                <span></span><p>or</p><span></span>
            </div>

            <button className="googleLogin" onClick={handleGoogleSignIn}>CONTINUE WITH GOOGLE</button>

        </div>
    );
};

export default Login;