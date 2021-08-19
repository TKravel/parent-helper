import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

function LandingPage(){
    const [isRegistered, setIsRegistered] = useState(true);

    function loginRegisterToggle(){
        setIsRegistered(prevValue => !prevValue)
    }
    return( 
        <div className="loginContainer">
            { isRegistered ?
                <Login toggleForm={loginRegisterToggle}/> :
                <Register toggleForm={loginRegisterToggle}/>
            }
        </div>
    )
}

export default LandingPage;