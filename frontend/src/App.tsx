import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import logo from './logo.svg';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search'
import { searchCompanies } from './Services/Companies';
import { CompanySearch } from './Types/Company';

function App() {
  const [search, setSearch] = useState<string>('');
  const [searchResults, setSearchResults] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>('');  

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      //console.log(e);
    };
  
    const onClick = async (e: SyntheticEvent) => {
      //console.log(e);
      let data = await searchCompanies(search);
      if (typeof data === "string") {
        setServerError(data);
      } else if (Array.isArray(data)) {
          setSearchResults(data);
          console.log(data);
      }         
    }
  return (
    <div className="App">
      <Search onClick={onClick} search={search} handleChange={handleChange}/>
      <CardList searchResults={searchResults} />
    </div>
  );
}

export default App;
