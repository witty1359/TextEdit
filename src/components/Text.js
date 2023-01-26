import React, {useState} from 'react'


export default function Text(props) {
  const [text, setText] = useState('');
  const upperCase = ()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success")
  }
  const lowerCase = ()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success")
  }
  const clearAll = ()=>{
    let newText='';
    setText(newText);
    props.showAlert("Whole text cleared","success")
  }

  const copyAll=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied","success")
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  let wrd=text.split(' ').length;
  if(text[text.length-1]===' ' || text.length===0) wrd--;
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
      <h4 className='headText'>Enter Text Here</h4>
      <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} placeholder='Type your text here' onChange={handleOnChange} style={{color: props.mode==='light'?'black':'white', backgroundColor:props.mode==='light'?'white':'rgb(76 80 84)'}} ></textarea>
        <div className="buttons flex-container">
          <div className="btn btn-dark btn-sm btnjyoti" onClick={upperCase}>Upper Case</div>
          <div className="btn btn-dark btn-sm btnjyoti" onClick={lowerCase}>Lower Case</div>
          <div className="btn btn-dark btn-sm btnjyoti" onClick={clearAll}>Clear All</div>
          <div className="btn btn-dark btn-sm btnjyoti" onClick={copyAll}>Copy All</div>
        </div>
      </div>
    </div>
    <div className="container my-5" id="txtSummary" style={{color: props.mode==='light'?'black':'white'}}>
      <h4 style={{textAlign: 'center'}}>Your text Summary</h4>
      <p>{text.length} characters and {wrd} words</p>
      <p>{wrd*0.008} minutes read</p>
      <h4 className>Preview</h4>
      <p className='previewText'>{text}</p>
    </div>
    </>
  )
}
