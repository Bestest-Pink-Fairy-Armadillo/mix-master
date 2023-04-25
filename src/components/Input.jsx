import React, {useState, useEffect} from 'react';
// import logo from './Assets/mixmaster.png';
import logoImage from '../Assets/mixmaster.png'
let logoUrl = "https://em-content.zobj.net/source/microsoft-teams/337/tropical-drink_1f379.png"


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
      
      {searchState === false ? (<><img src={logoUrl} /><div>Mix-Master</div></>) : (<div></div>)}
      <input placeholder="Search your drink name or ingredients..." className={`searchInput ${searchState === true ? 'active' : ''}`} type="text" onKeyDown={pressEnter}/>
    </div>
  )
}

export default Input;
