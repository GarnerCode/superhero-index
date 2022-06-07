import React, { useState } from 'react';
import axios from "axios";
import './styles/App.css';

import HeroCard from './components/HeroCard'

function App() {

  const [data, setData] = useState({});
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  React.useEffect(() => {
    axios.get('https://akabab.github.io/superhero-api/api/all.json').then((response) => {
      setData(response.data);
    });
  }, []);

  const handleSearch = (value) => {
    setSearchInput(value);
    data.filter((item) => {
      return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
    })
    const filteredData = data.filter((item) => {
    return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
  })
  setFilteredResults(filteredData);
  }

  return (
    <div className="App">
    <h1>Superhero Index</h1>
    <input value={searchInput} onChange={(e) => handleSearch(e.target.value)} className="searchBar" type="text" placeholder="Search" />
      <div className="container">
        {
          Object.keys(data).length === 0 ?
          <h1 className="loading">Loading...</h1>
          :
          searchInput.length > 0 ?
          filteredResults.map((item, index) => {
            return (
              <HeroCard key={index} data={item}/>
            )
          })
          :
          Object.keys(data).map((key, index) => {
              return (
                <HeroCard key={index} data={data[key]}/>
              );
            })
        }
      </div>
    </div>
  );
}

export default App;
