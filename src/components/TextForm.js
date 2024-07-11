import React, { useRef, useState } from 'react'
import "../styles/TextForm.css"
export default function TextForm(props) {

    const textareaRef = useRef(null);
    const copyToClipboard = () => {
        if (textareaRef.current) {
            //   const text = document.getElementById('myText').value;  //way 1 to get value
            const text = textareaRef.current.value;//way 2 to get value
            navigator.clipboard.writeText(text).then(() => {
                props.showAlert("Copied text to clipboard !","dark")

            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        }
    };
    const removeExtraSpaces = () => {
        const cleanedText = text.replace(/\s+/g, ' ').trim();
        setText(cleanedText);
    };  
    const handleSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed whitespaces from text !","success")
    };
    const [text, setText] = useState('');
    const [words, setWords] = useState('');
    const [chars, setChars] = useState('');
    const [btnText, setbtnText] = useState('A');
    const [pText1, setpText1] = useState('');
    const [pText2, setpText2] = useState('');
    const btnClick = () => {
        let abi = text;
        if (abi !== text.toUpperCase()) {
            setText(text.toUpperCase())
            setbtnText('a')
            props.showAlert("Text is Converted to uppercase !","info") 
        } else if (abi === text.toUpperCase()) {
            setText(abi.toLowerCase())
            setbtnText('A')
            props.showAlert("Text is Converted to lowercase !","info")

        }
    }
    const changeText = (event) => {
        setText(event.target.value)
    }
    const callCount = () => {
        setWords((text.split(" ")).filter((element)=>{return element.length!=0}).length)
        setChars(text.length)
        props.showAlert(`${words} words and ${chars} characters`,"info")
        setpText1(' words and ')
        setpText2('characters')
    }
    const callClear = () => {

        setpText1('')
        setpText2('')
        setText("")
        setWords("")
        setChars("")
        props.showAlert("Text Cleared !","warning")
    }
    return (
        <>
            <div >
                <h4 className='my-2' style={{ margin: '0', color: props.mode === 'light' ? '#565c63' : '#f0f0f0' }}>{props.heading}</h4>
                <div className="textArea mb-3" >
                    <textarea id="myText" ref={textareaRef} placeholder='Enter Text' className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#565c63', color: props.mode === 'light' ? '#565c63' : '#f0f0f0' }} onChange={changeText}  rows="2"></textarea>
                </div>
                <button type="button" onClick={btnClick} className="btn btn-outline-info my-1">{btnText}</button>
                <button type="button" onClick={callCount} className="btn btn-outline-danger mx-3 my-1">Count</button>
                <button type="button" onClick={callClear} className="btn btn-outline-warning my-1">Clear</button>
                <button type="button" onClick={copyToClipboard} className="btn btn-outline-secondary mx-3 my-1">Copy</button>
                <button type="button" onClick={handleSpaces} className="btn btn-outline-success my-1">Remove Extra Spaces</button>
            </div>
            <div className="countText">
                {/* <p style={{ color: props.mode === 'light' ? '#565c63' : '#f0f0f0' }} ><span className='green' >{words}  </span>{pText1}<span className='orange'>{chars} </span>{pText2}</p> */}
                <p style={{ color: props.mode === 'light' ? '#565c63' : '#f0f0f0' }}><span className='green' >{text.split(" ").filter((element)=>{return element.length!==0}).length} </span>words and <span className='orange'>{text.length}</span>  chars</p>
                <p style={{ color: props.mode === 'light' ? '#565c63' : '#f0f0f0' }}><span className='green' >{0.008 * text.split(" ").length}</span> Minutes to read</p>
                <h3 style={{ color: props.mode === 'light' ? '#565c63' : '#f0f0f0' }}>Preview</h3>
                <p style={{ color: props.mode === 'light' ? '#565c63' : '#f0f0f0' }}>{text}</p>
            </div>
        </>
    )
}

