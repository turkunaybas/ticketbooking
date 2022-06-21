import React, { useState, useContext } from 'react';
import LoginForm from './LoginForm';
import { CarContext } from '../AppContext/CarContext';
import Main from './Main';

export default function Login() {

    const [error, setError] = useState("");

    const [user, setUser] = useState("");

    const admin = { name: "admin", password: "123" }
    const Login = details => {
        console.log(details);
        let selected;

        if (admin.name === details.name && admin.password === details.password) {
            setUser({
                mail: details.mail,
                password: details.password
            });

        } else {
            console.log("girmedi", selected)
            setError("BİLGİLER UYMADI")
        }
    }


    const Logout = () => {
        setUser({ mail: "", password: "" })
    }


    return (

        <div className='Login'>

            <LoginForm Login={Login} Cancel={Cancel} error={error} />

        </div>





    )
}
