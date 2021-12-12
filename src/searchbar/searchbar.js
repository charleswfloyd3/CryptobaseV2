import React, { useState } from "react";
import {Link}  from 'react-router-dom';
import {useCoin} from '../store/coin'
import "./searchbar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {

  // search bar functionality
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
        
      setFilteredData(newFilter);
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  // setCoin is used to send coin selected to register page so that it can be sent along with user parameters to api
  const { setCoinEvent } = useCoin()

  return (
      <div className="homepage-container">
        <div className="search">
          <h1 className="company-name">Cryptobase</h1>
          <p className="coin-full-name-header">enter the name of the coin you would like to monitor...</p> 
          <div className="searchInputs">
            <input autoFocus type="text"placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
            <div className="searchIcon">
              {filteredData.length === 0 ? (
                <SearchIcon />
                ) : (
                <CloseIcon id="clearBtn" onClick={clearInput} />
              )}
            </div>
          </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value) => {
            return (
              <Link  style={{ color: 'inherit', textDecoration: 'inherit'}} to={'/register'}    className="dataItem"  onClick={()=>{setCoinEvent(value)
              }} ><img src={value.image} className="coin-icon" ></img>{value.name}</Link>
            );
          })}
        </div>
      )}
    </div> 
    </div>
  );
}

export default SearchBar;

