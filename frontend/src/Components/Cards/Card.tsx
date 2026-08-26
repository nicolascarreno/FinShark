import React, { SyntheticEvent } from 'react'
import "./Card.css";
import { CompanySearch } from '../../Types/Company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';

interface Props {
    id: string;
    searchResult: CompanySearch;
    onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({ id, searchResult, onPortfolioCreate }) => {
  return (
    <div className='card'>
        <img
            src="logo512.png"
            alt="Company Logo"
        />
        <div className='details'>
            <h2>{searchResult.long_name} ({searchResult.symbol})</h2>
            <p>{searchResult.currency}</p>
        </div>
        <p>{searchResult.current_price}</p>
        <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol}/>
    </div>
  )
}

export default Card