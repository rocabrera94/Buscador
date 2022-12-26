import {useState} from 'react';
import SearchBox from "./components/SearchBox/SearchBox";
import "./styles.css";
import data from "../../data/users.json"
import { SearchResults } from './components/SearchResults';

export default function Search() {
  const [isAtTop, setIsAtTop]= useState(false);
  const [results, setResults] = useState()
  const handleCloseSearch = () => {
    setIsAtTop(false);
    setResults([])
    };
  const handleSearchClick = (searchText) =>{
    setIsAtTop(true);
    if (data?.length){
      const searchTextMinus = searchText.toLowerCase();
      const filterData = data.filter((value)=>(
         (value.name.toLocaleLowerCase().includes(searchTextMinus) || 
          value.phone.toLocaleLowerCase().includes(searchTextMinus) ||
          value.email.toLocaleLowerCase().includes(searchTextMinus) ||
          value.username.toLocaleLowerCase().includes(searchTextMinus)
          )
      ));
      setResults(filterData);
    }
  }
  console.log(results)
  return (
    <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
      <SearchBox onSearch={handleSearchClick} onClose={handleCloseSearch} isSearching={isAtTop}/>
      <SearchResults results={results} isSearching={isAtTop}/>
    </div>
  );
}