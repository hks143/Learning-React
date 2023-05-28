import React from 'react'

const Rbs = (props) => {
  const onclick=()=>{
    props.showPage("edit");
  }
  return (
    <>
    <h1>Rbs Page</h1>
    <h1>{props.Name}</h1>
    <button onClick={onclick}>Back</button>
    </>
  )
}

export default Rbs