import React from 'react';
import CaseControlBtn from '../CaseControlBtn/CaseControlBtn';
import s from './Case.module.scss';
import b from '../btn/btn.module.scss';

const Case = ({caseItem, cases, setCases}) => {

  return(
    <div className={s.case}>
      <div className={s.case__wrap}>
        <h2 className={s.case__title} contenteditable="false">{caseItem.title}</h2>
        <p className={s.case__text} contenteditable="false">{caseItem.message}</p>
        <CaseControlBtn />
      </div>
    </div>
  );
}; 

export default Case;