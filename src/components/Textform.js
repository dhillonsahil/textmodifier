import React from "react";
import { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState('')

    const handleonchange = (event) =>{
        setText(event.target.value)
    }
    const ChangetoUpperCase = () => {
        setText(text.toUpperCase())
        props.showAlert('Converted to upper Case','success')
     }
     const ChangetoLowerCase = () =>{
        setText(text.toLocaleLowerCase())
        props.showAlert('Converted to lower Case','success')
     }
     const ChangetoCapital = ()=>{
        let newText= text.split('. ')
        for(let i=0;i<newText.length;i++){
            let n0  = newText[i].substring(0, 1).toUpperCase()
            let n1  = newText[i].substring(1, 999)
            newText[i] = (n0 + n1)
           }
           setText(newText.join(". "))
           props.showAlert('Capitalized Successfully ','success')
           
    }

    
    const ChangeWord = () =>{
        let oldWord = prompt("Enter the word to rename")
        let newWord = prompt("Enter the word to rename with") 
        oldWord=oldWord.toLowerCase() //lowercase
        let  tt= text.toLowerCase() // text lowercase
        tt = tt.split(' ') //split 
        for(let i=0;i<tt.length;i++){
            if(tt[i]=== oldWord ){
                tt[i]=newWord
                    }
        }
        tt = tt.join(' ')  // rejoin string
        setText(tt)
        props.showAlert('Word Changed Successfully','success')
       }

       const RemoveExtraSpaces = () =>{
        let newText= text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert('Extra space removed','success')
    }

    const CopyText = () =>{
        navigator.clipboard.writeText(text)
        props.showAlert('Text Copied','success')
    }


    const ClearText = () =>{
        setText('')
        props.showAlert("Cleared Text",'danger')
    }

        return (
            <>
            <div>
                <div className="mb-3 my-3 container">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        <h1 style={{color : props.mode==='dark'?'white':'black'}} >Enter Text To Modify</h1>
                    </label>
                    <textarea className="form-control"  id="exampleFormControlTextarea1" style={{backgroundColor : props.mode==='light'?'white':'gray', color : props.mode==='light'?'black':'white'}} rows="10" onChange={handleonchange} placeholder="Enter your Text" value={text}
                    ></textarea>
                    <div className="my-2">
                        <button className="btn btn-primary" onClick={ChangetoUpperCase}>Upper Case</button>
                        <button className="btn btn-primary mx-1" onClick={ChangetoLowerCase}>Lower Case</button>
                        <button className="btn btn-primary mx-1" onClick={ChangetoCapital}>Capital Case</button>
                        <button className="btn btn-primary mx-1" onClick={ChangeWord}>Rename word</button>
                        <button className="btn btn-primary mx-1" onClick={RemoveExtraSpaces}>Remove Extra Space</button>
                        <button className="btn btn-primary mx-1" onClick={ClearText}>Clear</button>
                        <button className="btn btn-primary mx-1" onClick={CopyText}>Copy</button>
                    </div>

                </div>
                <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
                    <h2 >Your Text Summary</h2>
                    <p>{text.length} letters and {(text.length===0 ||text.endsWith(' ')) ?text.split(' ').length-1:text.split(' ').length}   words</p>
                    <p> Time required to read the complete Text is : {(text.length===0) || text.endsWith(' ')?Math.round((text.split(' ').length*0.008-0.008) * 100) / 100:text.split(' ').length*0.008} Minutes</p>
                </div>
            </div>
            </>
        );
    }

    
