import React from 'react'

export default function ToDo(props) {

console.log(props)

const style = {
    padding: '10px,',
    margin: '10px',
    border: '2px solid black',
    backgroundColor: '#ecf0f1'
}
  return (
    <div style={style}>
        <p>{props.title || "Поесть"}</p>
        <p>сделано</p>
    </div>
  )
}
