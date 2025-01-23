/**@jsxImportSource @emotion/react */
import { Link, useNavigate } from 'react-router-dom';
import * as s from './style';
import React, { useRef, useState } from 'react';
import axios from 'axios';

function SignupPage(props) {
    const navigate = useNavigate();

    const [ inputRefs ] = useState([ useRef(), useRef(), useRef(), useRef() ]);
    const [ buttonRefs ] = useState([ useRef() ]);
    const [ inputValue, setInputValue ] = useState({
        username: "",
        password: "",
        name: "",
        email: "",
    }); 

    const handleInputOnChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        });
    }

    const handleInputOnKeyDown = (e) => {
        if(e.keyCode === 13) {
            let foundIndex = -1;
            for(let i = 0; i < inputRefs.length; i++) {
                if(inputRefs[i].current === e.target) {
                    foundIndex = i;
                    break;
                }
            }

            if(foundIndex === inputRefs.length - 1) {
                buttonRefs[0].current.click();
                return;
            }

            inputRefs[foundIndex + 1].current.focus();
        }
    }

    const handleSignupSubmitOnClick = async () => {
        try {
            const response = await axios.post("http://localhost:8080/servlet_study_war/api/signup", inputValue);
            console.log(response);
            alert("회원가입 완료");
            navigate(`/signin?username=${response.data.body.username}`);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div css={s.layout}>
            <div css={s.main}>
                <input type="text" 
                    placeholder='사용자 이름' 
                    name='username' 
                    value={inputValue.username} 
                    onChange={handleInputOnChange} 
                    onKeyDown={handleInputOnKeyDown} 
                    ref={ inputRefs[0] } />
                <input type="password" 
                    placeholder='비밀번호' 
                    name='password' 
                    value={ inputValue.password } 
                    onChange={ handleInputOnChange } 
                    onKeyDown={ handleInputOnKeyDown } 
                    ref={ inputRefs[1] } />
                <input type="text" 
                    placeholder='성명' 
                    name='name' 
                    value={ inputValue.name } 
                    onChange={ handleInputOnChange } 
                    onKeyDown={ handleInputOnKeyDown } 
                    ref={ inputRefs[2] } />
                <input type="text" 
                    placeholder='이메일 주소' 
                    name='email' 
                    value={ inputValue.email } 
                    onChange={ handleInputOnChange } 
                    onKeyDown={ handleInputOnKeyDown } 
                    ref={ inputRefs[3] } />
                <button onClick={handleSignupSubmitOnClick} ref={ buttonRefs[0] }>가입</button>
            </div>
            <div css={s.footer}>
                <span>계정이 있으신가요? </span>
                <Link to={"/signin"}>로그인</Link>
            </div>
        </div>
    );
}

export default SignupPage;