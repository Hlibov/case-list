import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './CaseControlBtn.module.scss'

const CaseControlBtn = () => {

  return (
    <div className={s.btnHolder}>
      <button className={`${s.btn} ${s.btn_color_danger}`}  data-action="delete">Delete</button>
      <button className={`${s.btn} ${s.btn_color_successful}`} data-action="ptiority">Priority</button>
      <button className={`${s.btn} ${s.btn_color_warning}`} data-action="done" data-push="false">Done</button>
      <button className={`${s.btn} ${s.btn_color_info}`} data-action="edit" data-push="false">Edit</button>
    </div>
  )
}

export default CaseControlBtn;