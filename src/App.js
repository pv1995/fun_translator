import './App.css';
import React, { useState, useEffect } from "react";
import Input from './component/input.js';
import Output from './component/output.js';
import History from './component/history.js';
import HistoryManager from './manager/data.js';

function App() {
  const driver = HistoryManager();
 console.log("driver", driver.getHistory);
  const [translations, setTranslations] = useState([]);
  const [currentTrans, setCurrentTrans] = useState("");
  useEffect( () => {
      function trans() {
        getAllTranslations();
    }
    trans();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getAllTranslations() {
    console.log(driver);
    var x = await driver.getHistory();
    setTranslations(x);
  }
  
  async function getTranslationsAndSave(phrase, language){
    const lang = language.toLowerCase();
    const new_phrase = encodeURI(phrase);
    var url = `https://api.funtranslations.com/translate/${lang}.json?text=${new_phrase}`;
    console.log(url);
    console.log("URL-----" ,url)
    console.log("APP PHRASE",phrase);
    try{
       await fetch(url, {
        method: 'GET',
      })
      .then(response => response.json())
      .then( async (data) => {
          console.log(data.contents.translated)
          setCurrentTrans(data.contents.translated)
          await driver.addTranslation(phrase, data.contents.translated, language)
          await getAllTranslations();
        
        // console.log("API DID NOT RETURN ANYTHING!!!")
      });
      }catch(error) {
        console.log("API NOT REACHED!!",error.message)
      }
  }

  

  return (
    <div className="App justify-content-center">
      <h1 className="my-4">Have fun with fun translations!!</h1>
      <div className="m-4">
      <Input getTranslationsAndSave={getTranslationsAndSave}></Input>
      </div>
      <div className="m-4">
      <Output currentTrans={currentTrans}></Output>
      </div>
      <h1 className="my-4">History</h1>
      <div className="m-4">
      <History translations={translations}></History>
      </div>
    </div>
  );
}

export default App;
