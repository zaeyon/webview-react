import React, {useState} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

const Container = styled.div`
width: 100vw;
background-color: white;
display: flex;
justify-content: center;
flex-direction: column;
padding: 3rem 3rem;
overflow-y: hidden;
`;

const Title = styled.div`
font-size: 23px;
font-weight: 600;
text-align: center;
`;

const Form = styled.form`
margin-top: 30px;
flex: 1;
display: flex;
flex-direction: column;
`;


const Input = styled.input`
flex: 1;
padding: 13px 13px;
font-size: 14px;
font-weight: 500;
border-radius: 4px;
border: 0.5px solid #A7A7A7;

::placeholder,

::-webkit-input-placeholder {
color: #8A8A8A
;
}
:-ms-input-placeholder {
color: #8A8A8A
;
}
`;


interface LoginButtonProps {
    readonly isVaild: boolean;
}

const LoginButton = styled.button<LoginButtonProps>`
    margin-top: 15px;
    background-color: ${(props: any) => props.isVaildLoginForm ? '#2D88D4' : '#BCBCBC'};
    border-radius: 4px;
    padding-top: 12px;
    padding-bottom: 12px;
    border: 0.5px solid #A7A7A7;
    font-weight: 700;
    font-size: 14px;
    color: white;
`;

const SignUpText = styled.div`
margin-top: 14px;
font-weight: 400;
font-size: 12px; 
color: #667085;
line-height: 15px;
user-select: none;
text-align: center;
`;


const LoginForm = () => {
    const [isVaild, setIsVaild] = useState(false);

    const navigate = useNavigate();

    return (
        <Container>
            <Title>
                로그인
            </Title>
            <Form>
                <Input
                placeholder='이메일'/>
                <Input
                placeholder='비밀번호'
                style={{marginTop: 15}}/>
                <LoginButton
                isVaild={isVaild}>
                    로그인
                </LoginButton>
            </Form>
            <SignUpText>등록된 계정이 없으신가요?
            <span
            onClick={() => navigate('/signup')}
            style={{color: '#2D88D4', fontWeight: 700}}> 회원가입</span></SignUpText>
        </Container>

    )
}

export default LoginForm;