/**@jsxImportSource @emotion/react */
import MainHeader from '../MainHeader/MainHeader';
import * as s from './style';
import React from 'react';

function MainLayout({ children }) {
    return (
        <div css={s.layout}>
            <MainHeader />
            { children }
        </div>
    );
}

export default MainLayout;