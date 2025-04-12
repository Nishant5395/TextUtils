import React,{useState} from 'react'

export default function About() {

    const [myStyle, setmyStyle] = useState(   {
        color:'black',
        backgroundColor:'white',
       
    })
    const [btntext, setbtntext] = useState("Enable Dark Mode")
 const toggleStyle=()=>{
    if(myStyle.color==='black'){
        setmyStyle({
            color:'white',
        backgroundColor:'black',
         border:'1px solid white'
        })
        setbtntext("Enable light Mode")
    }
    else{
        setmyStyle({
            color:'black',
        backgroundColor:'white'
        })
        setbtntext("Enable Dark Mode");
    }
 }
  return (
    <div className="container" style={myStyle}>
        <h1 className="my-2">About us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button"  type="button" style={myStyle}data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>  Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils give you a way to analyze your text quickly and efficiently.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong> Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong> Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This word counter software works in any  web browsers such as chrome,firefox,Safari,opera.It suits to count character in facebook ,blog,book etc.
      </div>
    </div>
  </div>
</div>
<div className="container my-3">
<button onClick={toggleStyle} type="button" className="btn btn-primary"
  >{btntext}</button>
</div>
    </div>
  )
}
