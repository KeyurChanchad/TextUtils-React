import React from "react";

export default function About(props) {

  // const [style, setStyle] = useState({
  //   color : 'cyan',
  //   backgroundColor : "white",
  // });

  let mystyle = {
      backgroundColor : props.mode === 'dark'? 'rgb(48 50 59 / 90%)' : 'white',
      color : props.mode === 'dark'? 'white' : 'rgb(48 50 59 / 90%)',
      border : '2px solid',
      borderColor : props.mode === 'dark'? 'rgb(48 50 59 / 90%)' : 'white',
  }
  return (
    <>
    <div className="accordion container mt-5" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
       Analyze your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
       TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count, uppercase convert, lowercase convert and extra space remove.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
       Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        TextUtils is a free character counter tool that provides instant character count & word count statistic for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
        Browser compatiable
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        This word counter software works in any web browser such as Chrome, Firebox, Internet Explorer, Safari and Opera. It suits to count characters in facebook, blog, excel, document, pdf document, essays etc.
      </div>
    </div>
  </div>
</div>
    </>
  );
}
