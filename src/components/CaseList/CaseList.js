import React from 'react';
import s from './CaseList.module.scss';
import Case from '../Case/Case';

const CaseList = ({cases, setCases}) => {
  
  // This function determines which button triggered the event
  const priorityCase = (e) => {
    let parent = e.target.parentElement,
     mainParent = parent.parentElement.parentElement,
     elBox = mainParent.parentElement,
     clonedNode = mainParent.cloneNode(true),
     bgBasic = 'background-color: rgba(255, 202, 127, 1)',
     bgSecond = 'background: green;';

    if(e.target.dataset.action === 'ptiority') {
      elBox.insertAdjacentElement('afterbegin', clonedNode);
      console.log(elBox, mainParent.parentElement)
      mainParent.remove();

    }

    if(e.target.dataset.action === 'delete') {
      mainParent.remove();
    }

    if(e.target.dataset.action === 'done') {
      setStateElement (e.target, parent.parentElement, bgSecond, bgBasic);
    }

    if(e.target.dataset.action === 'edit') {
      if(mainParent.querySelector('h2[contenteditable]').getAttribute('contenteditable') === 'false') {
        mainParent.querySelector('h2[contenteditable]').setAttribute('contenteditable', 'true');
        mainParent.querySelector('p[contenteditable]').setAttribute('contenteditable', 'true');
      } else {
        mainParent.querySelector('h2[contenteditable]').setAttribute('contenteditable', 'false');
        mainParent.querySelector('p[contenteditable]').setAttribute('contenteditable', 'false');
      }
    }
  }

   // This function changes the status of the flag by clicking on the button, and then changing the style of the item to which the pressed button belongs
   function setStateElement (elTarget, element, styles = "", secondStyles) {
      
    if(elTarget.dataset.push === 'false') {
      element.style.cssText = styles;
      elTarget.dataset.push = 'true';
    }
    else{
      element.style.cssText = secondStyles;
      elTarget.dataset.push = 'false';
    }
  }

  return (
    <div className={s.caseList} onClick={priorityCase}>
      {cases.map(item => {
        return (
          <Case 
            caseItem={item}
            setCases={setCases}
            cases={cases}
            key={item.id}
          />
        )}
      )}
    </div>
  );
};

export default CaseList;