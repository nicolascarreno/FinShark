import React from 'react'
import Card from '../Cards/Card'

interface Props {}

const CardList = (props: Props) => {
  return (
    <div>
        <Card  companyName='Apple' ticker='AAPL' price={100}/>
        <Card companyName='Microsoft' ticker='MSFT' price={200} />
        <Card companyName='Tesla' ticker='TSLA' price={300}/>
    </div>
  )
}

CardList.propTypes = {}

export default CardList