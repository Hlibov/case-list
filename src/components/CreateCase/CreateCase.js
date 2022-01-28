import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from '../CreateCase/CreateCase.module.scss';
import Btn from '../btn/btn';


const CreateCase = ({cases, setCases, textInput, setTextInput, titleInput, setTitleInput}) => {
  const userTitleHandler = (e) => {
    setTitleInput(e.target.value);
  }

  const userTextHandler = (e) => {
    setTextInput(e.target.value);
  }

  const submitCaseHandler = (e) => {
    e.preventDefault();
    setCases([...cases, {title: titleInput, message: textInput, id: uuidv4()}]);
    setTextInput("");
    setTitleInput("");
  }

  return (
    <form onSubmit={submitCaseHandler} className={s.form} action="#">
      <div className={s.form__group}>
        <label className={s.form__label} htmlFor="text-name">case name</label>
        <input className={s.form__input} onChange={userTitleHandler} id="text-name" type="text" value={titleInput} />
      </div>
      <div className={s.form__group}>
        <textarea className={s.form__textarea} onChange={userTextHandler} name="#" id="" placeholder="type text..." value={textInput}></textarea>
      </div>
      <Btn/>
    </form>
  )
}

export default CreateCase;