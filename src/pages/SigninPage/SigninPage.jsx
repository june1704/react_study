/**@jsxImportSource @emotion/react */
import { Link, useSearchParams } from 'react-router-dom';
import * as s from './style';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

function SigninPage(props) {
    const [ searchParams ] = useSearchParams();

    const [ inputRefs ] = useState([ useRef(), useRef(), useRef(), useRef() ]);
    const [ buttonRefs ] = useState([ useRef() ]);
    const [ inputValue, setInputValue ] = useState({
        username: "",
        password: "",
    }); 

    useEffect(() => {
        setInputValue({
            ...inputValue,
            username: searchParams.get("username"),
        })
    }, [searchParams.get("username")]); 

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

    const handleSigninSubmitOnClick = async () => {
        try {
            const response = await axios.post("http://localhost:8080/servlet_study_war/api/signin", inputValue);
            console.log(response);
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
                <button onClick={handleSigninSubmitOnClick} ref={ buttonRefs[0] }>로그인</button>
            </div>
            <div css={s.footer}>
                <span>계정이 없으신가요? </span>
                <Link to={"/signup"}>회원가입</Link>
            </div>
        </div>
    );
}

export default SigninPage;