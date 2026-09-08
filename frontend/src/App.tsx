import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import logo from './logo.svg';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search'
import { searchCompanies } from './Services/Companies';
import { CompanySearch } from './Types/Company';
import ListPortfolio from './Components/Portfolio/ListPortfolio/ListPortfolio';

function App() {
  const [search, setSearch] = useState<string>('');
  const [searchResults, setSearchResults] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>('');  
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);

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

    const onPortfolioCreate = (e: any) => {
      e.preventDefault();
      const exists = portfolioValues.find((value) => value === e.target[0].value);
      if (exists) {
        return;
      }
      const updatedPorfolioValues = [...portfolioValues, e.target[0].value];
      setPortfolioValues(updatedPorfolioValues);
    }
  return (
    <div className="App">
      <Search onClick={onClick} search={search} handleChange={handleChange}/>
      <ListPortfolio portfolioValues={portfolioValues}/>
      <CardList searchResults={searchResults} onPortfolioCreate={onPortfolioCreate} />
    </div>
  );
}

export default App;
