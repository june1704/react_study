/**
 * Promise -> async / await
 */

import React, { useState } from 'react';

function App12(props) {
    const findUserByUsername = (username) => {
        const userList = [
            {username: "aaa", password: "1111"},
            {username: "bbb", password: "2222"},
            {username: "ccc", password: "3333"},
        ];
        return userList.find(user => user.username === username)
    }

    const getUserApi = (url, params) => {

        return new Promise((resolve, reject) => {
            console.log(`서버에 ${url}?${params}요청!!`);
            const foundUser = findUserByUsername(params.username);

            if(!!foundUser) {
                resolve(foundUser);
            } else {
                reject(new Error("해당 사용자 정보를 찾을 수 없습니다."));
            }
        });
    }

    const [ usernameInput, setUserNameInput ] = useState("");

    const handleUsernameInputOnChange = (e) => {
        setUserNameInput(e.target.value)
    }

    const handleSearchOnClick = () => {
        getUserApi("http://localhost:8080/user", {username: usernameInput})
        .then((response) => {
            console.log(response);
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <div>
            <input type="text"
            placeholder='username'
            value={usernameInput}
            onChange={handleUsernameInputOnChange} />
            <button onClick={handleSearchOnClick}>찾기</button>
        </div>
    );
}

export default App12;