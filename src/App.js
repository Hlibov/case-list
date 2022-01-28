import React, {useState} from 'react';
import './scss/style.scss';
import CreateCase from './components/CreateCase/CreateCase';
import CaseList from './components/CaseList/CaseList';

function App() {
  const[textInput, setTextInput] = useState("");
  const[titleInput, setTitleInput] = useState("");
  const[cases, setCases] = useState([]);

  return (
    <div className="wrapper bg-dark">
      <div className="container">
        <div className="text-center">
          <CreateCase
            titleInput={titleInput}
            setTitleInput={setTitleInput}
            textInput={textInput} 
            setTextInput={setTextInput} 
            cases={cases} 
            setCases={setCases}
          />
          <div className="bg-light border-r--md">
            <CaseList titleInput={titleInput} cases={cases} setCases={setCases}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;