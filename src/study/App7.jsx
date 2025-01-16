/**
 * 도서정보 등록 및 조회
 * 
 * 도서명, 저자명, 출판사명 입력
 * bookList 저장
 * 
 * table
 * tbody
 * tr
 * td
 */

import React, { useState } from 'react';

function App7(props) {

    const [bookList, setBookList] = useState([]);

    const [book, setBook] = useState({
        title: "",
        author: "",
        publisher: "",
    });

    const [search, setSearch] = useState({
        title: "",
        author: "",
        publisher: "",
    })

    const [filteredBooks, setFilteredBooks] = useState([]);

    const handleOnChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value,
        });
    }

    const handleAddBookOnClick = () => {
        setBookList([
            ...bookList, book
        ])

        alert("도서 추가 완료");

        setBook({
            title: "",
            author: "",
            publisher: "", 
        });
    }

    const handleSearchOnChange = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value,
        })
    }

    const handleSearchOnClick = () => {
        const result = bookList.filter(book =>
            (book.title === search.title || search.title === '') &&
            (book.author === search.author || search.author === '') &&
            (book.publisher === search.publisher || search.publisher === '')
        );
        setFilteredBooks(result);
    };

    return (
        <div>
            <h1>도서 정보 등록 및 조회</h1>
            <div>
                <label htmlFor="">도서명:</label>
                <input type="text" name="title" placeholder="도서명 검색"
                onChange={handleSearchOnChange} value={search.title} />
            </div>
            <div>
                <label htmlFor="">저자명</label>
                <input type="text" name="author" placeholder="저자명 검색"
                onChange={handleSearchOnChange} value={search.author} />
            </div>
            <div>
                <label htmlFor="">출판사명</label>
                <input type="text" name="publisher" placeholder="출판사명 검색"
                onChange={handleSearchOnChange} value={search.publisher} />
            </div>
            <button onClick={handleSearchOnClick}>도서조회</button>

            <div>
                <label htmlFor="title">도서명: </label>
                <input type="text" name="title" onChange={handleOnChange}
                value={book.title} />
            </div>
            <div>
                <label htmlFor="author">저자명: </label>
                <input type="text" name="author" onChange={handleOnChange}
                value={book.author} />
            </div>
            <div>
                <label htmlFor="publisher">출판사명: </label>
                <input type="text" name="publisher" onChange={handleOnChange}
                value={book.publisher} />
            </div>
            <button onClick={handleAddBookOnClick}>도서 추가</button>

            {filteredBooks.length > 0 ? (
            <table border="1">
                <thead>
                    <tr>
                        <th>도서명</th>
                        <th>저자명</th>
                        <th>출판사명</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBooks.map((book, index) => (
                    <tr key={index}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.publisher}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
                ) : (
                <p>검색 결과가 없습니다.</p>
            )}
        </div>
    );
}

export default App7;