import "./style.css"
import React, { useState } from 'react';

function BookSearchItems({ bookList, setBookTableList }) {
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
        if(!searchValue.text.trim()) { // 검색어 없을 때 전체조회
            setBookTableList(bookList);
            return;
        }
        const foundBooks = bookList.filter(book => book[searchValue.select].includes(searchValue.text));
        setBookTableList(foundBooks);
    }

    return (
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
    );
}

export default BookSearchItems;