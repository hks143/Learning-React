import React from 'react'
import List from './List';
import Edit from './Edit';
import Rbs from './Rbs';
import { useState } from 'react';
const Main = () => {
    const [Name,setName]=useState('');
    const [showList,setShowList]=useState(true);
    const [showEdit,setShowEdit]=useState(false);
    const [showRbs,setShowRbs]=useState(false);
    const [newName,setnewName]=useState('');
    const reset=()=>{
      setShowEdit(false);
      setShowList(false);
      setShowRbs(false);
    }
    const showPage=(page)=>{
        reset();
        if(page=="edit"){
        setShowEdit(true);
        }
  
        if(page=="rbs"){
          setShowRbs(true);
        }
  
        if(page=="list"){
          setShowList(true);
        }
    }
    
    return (
      <>
        {showList && <List setnewName={setnewName} Name={Name} showPage={showPage}  changeName={setName} ></List> }
        {showEdit && <Edit showPage={showPage} setnewName={setnewName} ConstName={Name} Name={newName}></Edit>}
        {showRbs &&  <Rbs Name={newName} showPage={showPage}></Rbs>}
      </>
    );
}

export default Main