import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../images/logos/logo.png';
import firebaseConfig from './firebase.config';
import * as firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import googleLogo from '../../images/google.png';
import { UserContext } from '../../App';

firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
  
    const handleGoogleLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            
            var { displayName, email, photoURL } = result.user;
            const loginUserInfo = {...loggedInUser}
            loginUserInfo.email = email;
            loginUserInfo.name = displayName;
            loginUserInfo.img = photoURL;

            setLoggedInUser(loginUserInfo);
            history.replace(from);
            
        }).catch(function(error) {
            var errorMessage = error.message;
           console.log(errorMessage);
            });
    }
   
    return (
        <div  className="container pt-5 ">
            <div className='text-center'>
                <Link to='/'><img src={logo} alt="" width="150"/></Link>
            </div>
            <div className='loginStyle' > 
                <h4><b>Login With</b></h4> <br/>
                <button onClick ={handleGoogleLogin}className="btn-logo">Continue With Google</button>
                <p><small>Don't have an account? <a href="create">Create an account</a></small></p>
            </div>
        </div>
    );
};

export default Login;