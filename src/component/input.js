import { useState, useRef } from "react";

/**
 * This is the Input component.
 * The component takes a language and a phrase to be translated, from the user.
 * @state {array} selectedLanguage - alist of languages for the usr to choose from.
 * @state {string} inputPhrase - a list of languages for the user to choose from.
 * @state {boolean} isValid - to check if the input phrase is valid to be translated.
 */

const Languages = [
  "Yoda",
  "Dothraki",
  "Pirate",
  "Minion",
  "Shakespeare",
  "OldEnglish",
  "Pig-Latin",
];

function Input({ getTranslationsAndSave }) {
  const [selectedLanguage, setSelectedLanguage] = useState(Languages[0]);
  const inputPhrase = useRef("");
  const [isValid, setValidity] = useState(true);
  function handleChange(e) {
    console.log("INPUt DROP DOWN", e.target.value);
    setSelectedLanguage(e.target.value);
  }
  function handleInputPhrase() {
    if (
      /^[0-9]+$/.test(inputPhrase.current.value) ||
      inputPhrase.current.value === ""
    ) {
      setValidity(false);
      return;
    }
    setValidity(true);
  }
  function sendDataToMain() {
    getTranslationsAndSave(inputPhrase.current.value, selectedLanguage);
  }
  return (
    <div className="Input">
      <div className="row justify-content-center">
        <div className="col-3">
          <select
            className="form-control h-75 form-control-lg"
            onChange={handleChange}
            value={selectedLanguage}
          >
            {Languages.map((l, i) => {
              return (
                <option name="selectedLang" value={l} key={i}>
                  {l}
                </option>
              );
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
              <button
                type="button"
                id="translatePhrase"
                className="btn-primary input-group-text"
                onClick={sendDataToMain}
              >
                TRANSLATE
              </button>
            </div>
          </div>
          <div id="errorMsg">
            <span className={isValid ? "err-text-valid" : "err-text-invalid"}>
              {" "}
              Please enter valid values!{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
