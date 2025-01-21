/**@jsxImportSource @emotion/react */
import axios from 'axios';
import * as s from './style';
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';

function WritePage(props) {

    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        ['link', 'image', 'video', 'formula'],
      
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
      
//        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
      
        ['clean']                                         // remove formatting button
      ];

    useEffect(() => {
        const head = document.querySelector("head");
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css";
        head.appendChild(link);
    }, [])

    const [ inputValue, setInputValue ] = useState ({
        title: "",
        content: "",
    })

    const handleInputOnChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        });
    }

    const handleQuillOnChange = (value) => {
        setInputValue({
            ...inputValue,
            content: value,
        });
    }

    const handleWriteSubmitOnClick = async () => {
        try {
            const response = await axios.post("http://localhost:8080/servlet_study_war/api/board", inputValue);
        } catch(error) {

        }
    }

    return (
        <div>
            <div css={s.headerLayout}>
                <button onClick={handleWriteSubmitOnClick}>작성하기</button>
            </div>
            <div css={s.titleLayout}>
                <input type="text"
                    placeholder='여기에 제목을 입력하세요.'
                    name='title'
                    value={inputValue.title}
                    onChange={handleInputOnChange}
                />
            </div>
            <ReactQuill 
                modules={{
                    toolbar: toolbarOptions, 
                }}
                style={{
                    boxSizing: "border-box",
                    width: "100%",
                    height: "600px",
                }}
                value={inputValue.content}
                onChange={handleQuillOnChange}
            />
        </div>
    );
}

export default WritePage;