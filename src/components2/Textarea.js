import React from 'react'

export default function Textarea(props) {
  return (
    <div>
        <h1>TextArea</h1>
      <textarea className={props.theme} name="mytext" id="mytext" cols={100} rows={5}></textarea>
    </div>
  )
}
