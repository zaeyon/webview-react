import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

const Container = styled.div`
width: 20rem;
background-color: white;
display: flex;
justify-content: center;
flex-direction: column;
padding: 3rem 3rem;

@media (max-width: 768px) {
width: 100vw;
}
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
margin-top: 15px;
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


interface ButtonProps {
    readonly isVaild: boolean;
}

const Button = styled.button<ButtonProps>`
    margin-top: 15px;
    background-color: ${(props: any) => props.isVaild ? '#2D88D4' : '#BCBCBC'};
    border-radius: 4px;
    padding-top: 12px;
    padding-bottom: 12px;
    border: 0.5px solid #A7A7A7;
    font-weight: 700;
    font-size: 14px;
    color: white;
`;

const LoginText = styled.div`
margin-top: 14px;
font-weight: 400;
font-size: 12px; 
color: #667085;
line-height: 15px;
user-select: none;
text-align: center;
`;


interface props {
    submitSignup: (e: any, email: string,  nickname: string, password: string) => void;
}


const SignupForm = ({submitSignup}: props) => {
    const [isVaild, setIsVaild] = useState(false);
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if(email.length > 0 && nickname.length > 0 && password.length > 0 && (password === confirmPwd)) {
            setIsVaild(true);
        } else {
            setIsVaild(false);
        }

    }, [email, nickname, password, confirmPwd])

    return (
        <Container>
            <Title>
                회원가입
            </Title>
            <Form onSubmit={(e) => submitSignup(e, email, nickname, password)}>
                <Input
                style={{marginTop: 0}}
                placeholder='이메일'
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
                <Input
                placeholder='닉네임'
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}/>
                <Input
                type={'password'}
                placeholder='비밀번호'
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
                <Input
                type={'password'}
                placeholder='비밀번호 확인'
                value={confirmPwd}
                onChange={(e) => setConfirmPwd(e.target.value)}/>
                <Button
                type={"submit"}
                isVaild={isVaild}
                disabled={!isVaild}>
                    회원가입
                </Button>
            </Form>

            <LoginText>이미 계정이 있으신가요?
            <span
            onClick={() => navigate('/')}
            style={{color: '#2D88D4', fontWeight: 700}}> 로그인</span></LoginText>
        </Container>

    )
}

export default SignupForm;