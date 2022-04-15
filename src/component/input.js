import { useState,useRef } from "react";

const Languages = [
  "Yoda",
  "Dothraki",
  "Pirate",
  "Minion",
  "Shakespeare",
  "OldEnglish",
  "Pig-Latin"
];

function Input({getTranslationsAndSave}) {
  const [selectedLanguage, setSelectedLanguage] = useState(Languages[0]);
  const inputPhrase = useRef("");
  function handleChange(e) {
    console.log("INPUt DROP DOWN", e.target.value)
    setSelectedLanguage(e.target.value);
  }
  function handleInputPhrase() {
    //  document.querySelector('.errorMsg').style.visibility = 'hidden';
     if (typeof(inputPhrase.current.value)== 'number' || inputPhrase.current.value === "") {
        document.querySelector('.errorMsg').style.visibility = 'visible';
    }
  }
  function sendDataToMain(){
    getTranslationsAndSave(inputPhrase.current.value, selectedLanguage)
  }
  return (
    <div className="Input">
      <div className="row justify-content-center">
        <div className="col-3">
          <select className="form-control h-75 mt-2 form-control-lg" onChange={handleChange} value={selectedLanguage}>
            {Languages.map((l,i) => {
              return <option name="selectedLang" value={l} key={i}>{l}</option>;
            })}
          </select>
        </div>
        <div className="col-6">
          <div className="input-group">
            <div className="d-flex input-group-prepend">
              <span className="input-group-text">Enter Phrase</span>
            </div>
            <textarea
              name="inputPhrase"
              type="text"
              className="form-control"
              aria-label="With textarea"
              ref={inputPhrase}
              onChange={handleInputPhrase}
            ></textarea>
            <div className="d-flex input-group-append">
              <button type="button" id="translatePhrase" className="btn-primary input-group-text" onClick={sendDataToMain}>
                TRANSLATE
              </button>
            </div>
          </div>
          <div className="errorMsg text-red" visibility="hidden"> Please enter valid values! </div>
        </div>
      </div>
      </div>
  );
}

export default Input;
