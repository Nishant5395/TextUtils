import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("UpperCase was clicked: "+text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("converted to upperCase","success");
    }
    const handleLowClick=()=>{
        //console.log("UpperCase was clicked: "+text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowerCase","success");
    }
    const handleClearClick=()=>{
      //console.log("UpperCase was clicked: "+text);
      let newText='';
      setText(newText)
      props.showAlert("text cleared","success");
  }
    const handleOnChange=(event)=>{
        //console.log("on change");
        setText(event.target.value);
        
    }
    const handleCopy=()=>{
      var text=document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("text copied","success");
    }

    const [text,setText]=useState('Enter text here');
    //text ="new text"; this is not right way to set the new state
    //setText("new text"); this is right way to change the state
  return (
    <>
    <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
 <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summery</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length}characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
