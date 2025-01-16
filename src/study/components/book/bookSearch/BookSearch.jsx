import React, { useState } from 'react';


function BookSearch({ bookList }) {

    const [ bookTableList, setBookTableList ] = useState([]);
    const [ searchValue, setSearchValue ] = useState({
            select: "bookName",
            text: "",
        });
    
        const searchOptions = [
            {
                id: 1,
                label: "도서명",
                value: "bookName",
            },
            {
                id: 2,
                label: "저자명",
                value: "author",
            },
            {
                id: 3,
                label: "출판사",
                value: "publisher",
            },
        ];
    
        const handleSearchValueOnChange = (e) => {
            setSearchValue({
                ...searchValue,
                [e.target.name]: e.target.value,
            });
        }
    
        const handleSearchButtonOnClick = () => {
            if(!searchValue.text.trim()) { // 검색어 없을 떄 전체조회
                setBookTableList(bookList);
                return;
            }
            const foundBooks = bookList.filter(book => book[searchValue.select].includes(searchValue.text));
            setBookTableList(foundBooks);
        }

    return (
        <div>
            <h1>도서정보 조회</h1>
            <div className="search-items">
                <select name="select" value={searchValue.select} onChange={handleSearchValueOnChange}>
                    {
                        searchOptions.map(option => <option key={option.id} value={option.value}>{option.label}</option>)
                    }
                    <option value="">도서명</option>
                </select>
                <input type="text" name="text" value={searchValue.text} onChange={handleSearchValueOnChange} />
                <button onClick={handleSearchButtonOnClick}>검색</button>
            </div>
            <table className="book-table">
                <thead>
                    <tr>
                        <th>도서명</th>
                        <th>저자명</th>
                        <th>출판사명</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookTableList.map(book =>
                            <tr>
                                <td>{book.bookName}</td>
                                <td>{book.author}</td>
                                <td>{book.publisher}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default BookSearch;