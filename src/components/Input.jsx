import React, {useState, useEffect} from 'react'

function Input(props) {
  // const [inputValue, setInputValue] = useState('');

  function pressEnter(event) {
    if (event.keyCode === 13) {
        props.changeSearch(event.target.value)
    }
  }

  return (
    <>
      {/* <div>Input</div> */}
      <input id='searchInput' type="text" onKeyDown={pressEnter}/>
    </>
  )
}

export default Input;
