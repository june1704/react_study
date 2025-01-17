import React, { useEffect, useState } from 'react';

function App10(props) {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const unmount = () => {
        console.log("장착해제됨");
    }

    const mount = () => {
        console.log("장착됨2");
        return unmount;
    }

    useEffect(mount);

    useEffect(() => {
        console.log(num1);
        setNum2(num1 + 100);
    }, [num1]);

    useEffect(() => { 
        console.log(num2);
    }, [num2]); // num2 실행

    useEffect(() => {
        console.log(num1);
        console.log(num2);
    }, [num1, num2]); // 둘 중에 하나만 실행된다

    useEffect(() => {
        console.log("마운트!!!");
    }, []); // 최초의 한 번만 실행됨

    const handleOnClick = () => {
        setNum1(num1 + 10);
    }

    console.log("???????");

    return (
        <div>
            <h1>Num1: {num1}</h1>
            <h1>Num2: {num2}</h1>

            <button onClick={handleOnClick}>클릭</button>
        </div>
    );
}

export default App10;