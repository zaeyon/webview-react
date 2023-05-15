import { baseUrl } from ".";
import axios from 'axios';

export const POST_signup = (email: string, nickname: string, password: string) => {
    console.log("email nickname password", email, nickname, password);

    const promise = axios.post(`${baseUrl}/auth/registration`, {
        email,
        nick_name : nickname,
        password,
    })

    const resPromise = promise.then((response) => response);

    return resPromise;
}

export const GET_checkEmail = (email: string) => {
    
    const promise = axios.get(`${baseUrl}/accounts/${email}`)
}