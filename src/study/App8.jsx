import React, { useState } from 'react';
import "./styles/app7.css"
import BookRegister from './components/book/bookRegister/BookRegister';
import BookSearch from './components/book/bookSearch/BookSearch';

function App8(props) {
    const [bookList, setBookList] = useState([])

    return (
        <div className='container'>
            <BookRegister bookList={bookList} setBookList={setBookList} />
            <BookSearch bookList={bookList} />
        </div>
    );
}

export default App8;
