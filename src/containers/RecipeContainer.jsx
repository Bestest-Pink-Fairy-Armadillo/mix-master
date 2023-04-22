import React, {useState, useEffect} from 'react'

function RecipeContainer() {
    const [data, setData] = useState([]);
    const [search, newSearch] = useState('');

    const options = {
      method: 'GET',
      headers: {
        'X-Api-Key': 'bjNaFkpXClb//EUxueIp4g==p0lMVx6Vc1wHf5JL'
      }
    }

    useEffect(() => {
        fetch('https://api.api-ninjas.com/v1/cocktail?name=tequila', options)
          .then(response => response.json())
          .then(data => setData(data))
          .then(console.log(data));
      }, []);

  return (
    <>
    <div>RecipeContainer</div>
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
    </>
  )
}

export default RecipeContainer;
