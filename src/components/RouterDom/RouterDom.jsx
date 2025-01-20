import React, { useEffect, useState } from 'react';
import Route from './Route';

function RouterDom({ children }) {
    const [ pathname, setPathname ] = useState(window.location.pathname);

    console.log(pathname)

    useEffect(() => {
        setPathname(window.location.pathname);
    }, [window.location.pathname])

    return (
        <div>
            <Route pathname={pathname} path={"/a"} element={<h1>A페이지</h1>} />
            <Route pathname={pathname} path={"/b"} element={<h1>B페이지</h1>} />
            <Route pathname={pathname} path={"/c"} element={<h1>C페이지</h1>} />
            <Route pathname={pathname} path={"/d"} element={<h1>D페이지</h1>} />
        </div>
    );
}

export default RouterDom;