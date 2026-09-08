import React from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio';

interface Props {
    portfolioValues: string[];
}

const ListPortfolio = ({ portfolioValues }: Props) => {
  return (
    <>
        <h3>Mi Portfolio</h3>
        <ul>
            {portfolioValues && 
                portfolioValues.map((portfolioValue) => {
                    return <CardPortfolio portfolioValue={portfolioValue}/>;      
                })
            }
        </ul>
    </>
  )
}

export default ListPortfolio