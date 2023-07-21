import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState('Enter your text here');

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const cleartext = () => {
        setText('');
    };

    const handleOnClick = () => {
        let a = text.toUpperCase();
        setText(a);
    };

    return (
        <>
            <div
                className="container"
                style={{ color: props.mode === 'light' ? 'black' : 'white' }}
            >
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="8"
                        onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode === 'light' ? 'white' : 'grey',
                            color: props.mode === 'light' ? 'black' : 'white',
                            border: props.mode === 'dark' ? 'none' : '1px solid black',
                        }}
                        value={text}
                    ></textarea>
                    <button
                        type="button"
                        className={`btn btn-${props.mode === 'light' ? 'primary' : 'success'} my-2`} onClick={handleOnClick}>
                        Convert to uppercase
                    </button>
                    <button
                        type="button" className={`btn btn-${props.mode === 'light' ? 'primary' : 'success'} my-2 mx-3`} onClick={cleartext}>
                        Clear text
                    </button>
                </div>
                <div>
                    <h1>Your text summary</h1>
                    <p>
                        {text.split(' ').filter((word) => word.length !== 0).length} words {text.length} characters
                    </p>
                    <h1>Preview</h1>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
}
