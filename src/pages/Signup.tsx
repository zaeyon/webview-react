import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

import SignupForm from '../components/SignupForm';

import { POST_signup } from '../server/auth';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;

@media (min-width: 768px) {
    height: 100vh;
    background-color: #fcfafa;
}

}
`;

const Signup = () => {

    const navigate = useNavigate();

    const submitSignup = (e: any, email: string, nickname: string, password: string) => {

        e.preventDefault();

        POST_signup(email, nickname, password)
        .then((response) => {
            console.log("POST_signup response", response);
            if(response.data.result === 'OK') {
                navigate('/home');
            }
        })
        .catch((error) => {
            console.log("POST_signup error", error);
        })
    }

    return (
        <Container>
            <SignupForm
            submitSignup={submitSignup}/>
        </Container>
    )
}

export default Signup;