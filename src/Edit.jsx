import React, { useState } from 'react'

const Edit = (props) => {
  const [Name,setName]=useState(props.Name);
  const onclick = () => {
    props.setnewName(Name);
    props.showPage("rbs");
  }
  const onchange = (event) => {
      setName(event.target.value);
  }
  return (
    <>
      
      <h1>Edit Page</h1>
      <input onChange={onchange} type="text" value={Name} />
      <button onClick={onclick}>Edit</button>
      <button onClick={() => props.showPage("list")}>Back</button>
      <button onClick={()=>setName(props.ConstName)}>Cancel Edit</button>
    </>
  )
}

export default Edit