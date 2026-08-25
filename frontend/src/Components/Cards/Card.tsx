import React from 'react'
import "./Card.css";
import { CompanySearch } from '../../Types/Company';

interface Props {
    id: string;
    searchResult: CompanySearch;
}

const Card: React.FC<Props> = ({ id, searchResult }) => {
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
    </div>
  )
}

export default Card