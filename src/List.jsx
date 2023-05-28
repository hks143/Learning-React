import React, { useEffect } from 'react'

const List = (props) => {
 
  const changeName = (event) => {
    props.setnewName(event.target.value);
    props.changeName(event.target.value);
    
  }
  useEffect(()=>{
    props.setnewName(props.Name)
  })
  const onclick=(event)=>{
    //  event.preventDefault();
     props.showPage("edit");
  }
  return (
    <>
      <h1>list page</h1>
      <input value={props.Name} onChange={changeName}></input>
      <button onClick={onclick}>Submit</button>
    </>
  )
}

export default List