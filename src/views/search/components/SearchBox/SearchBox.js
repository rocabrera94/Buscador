import React,{ useState } from "react";

import "./styles.css";
export default function SearchBox({onSearch, onClose, isSearching}) {
  const [searchText, setSearchText] = useState("");
  const handleSearchClick = () =>{
    setSearchText('');
    onClose();
  }
  return (
    <div className="search-box">
      <h2 className="search-box-title">Buscador de personal</h2>
      <div className='search-box-buttons'>
        <label>
          <input
            className="search-box-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
        ></input>
        </label>
        <button onClick={() => onSearch(searchText)} disabled={!searchText.length}>Buscar</button>
        {isSearching && <button onClick={handleSearchClick} disabled={!searchText.length}>Cerrar</button>}
      </div>
    </div>
  );
}