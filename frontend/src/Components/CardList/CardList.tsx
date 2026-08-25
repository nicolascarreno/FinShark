import React from 'react'
import Card from '../Cards/Card'
import { CompanySearch } from '../../Types/Company'
import { v4 as uuidv4 } from "uuid"

interface Props {
  searchResults: CompanySearch[];
}

const CardList: React.FC<Props> = ( {searchResults}: Props ) => {
  return (
    <> 
    {searchResults.length > 0 ? (
      searchResults.map((result) => {
        return <Card id={result.symbol} key={uuidv4()} searchResult={result} />
      })
    ):(
      <h1>No se encontraron resultados</h1>
    )}</>
  )
}

export default CardList