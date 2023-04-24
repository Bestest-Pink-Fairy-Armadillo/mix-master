import React, {useState, useEffect} from 'react'

function Input(props) {
  // const [inputValue, setInputValue] = useState('');
  const [searchState, setSearchState] = useState(false);

  function pressEnter(event) {
    if (event.keyCode === 13) {
        props.changeSearch(event.target.value);
        setSearchState(
          true
        );
        console.log(searchState);
    }
  }

  return (
    <div className='searchItems'>
      {/* <div>Input</div> */}
      {searchState === false ? (<div>All your problems will be solved here...</div>) : (<div></div>)}
      <input placeholder="Drink name or ingredients..." className={`searchInput ${searchState === true ? 'active' : ''}`} type="text" onKeyDown={pressEnter}/>
    </div>
  )
}

export default Input;
