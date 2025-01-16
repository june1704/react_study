import React, { useState } from 'react';
import Signin from './components/sign/Signin/Signin';
import Signup from './components/sign/Signup/Signup';

function App6(props) {
    const [ path, setPath ] = useState("signin");
    const [ userList, setUserList ] = useState([])

    const handlePageChangeButtonOnClick = (e, path) => {
        setPath(path);
    };

    return (
        <div>
            <button onClick={(e) => handlePageChangeButtonOnClick(e, "signin")}>로그인</button>
            <button onClick={(e) => handlePageChangeButtonOnClick(e, "signup")}>회원가입</button>
            {
                path === "signin" && <Signin userList={userList} />
            }
            {
                path === "signup" && <Signup userList={userList} setUserList={setUserList} />
            }
        </div>
    );
}

export default App6;


















































































