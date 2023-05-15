/** @jsxImportSource @emotion/react */

import React, {useState} from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import LoginForm from '../components/LoginForm';

const containerStyle = css({
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
})

const Container = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
    height: 100vh;
    background-color: #fcfafa;
}        
`;

const Login = () => {

    

    return (
        <div
        css={containerStyle}>
            <LoginForm/>
        </div>
    )
}

export default Login