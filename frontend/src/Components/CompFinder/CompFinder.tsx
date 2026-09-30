import React, { useEffect, useState } from 'react'
import { CompanyCompData } from '../../Types/Company';
import { getCompData } from '../../Services/Companies';
import CompFinderItem from './CompFinderItem/CompFinderItem';

type Props = {
    ticker: string;
}

const CompFinder = ({ ticker }: Props) => {
  
  const [compData, setCompData] = useState<CompanyCompData[]>();
  useEffect(() => {
    const CompanyCompData = async () => {
        const result = await getCompData(ticker);
        console.log(result);
        console.log(result?.data)
        setCompData(result?.data);
    }
    CompanyCompData();
  }, [ticker])
  
  return(
    <div className='inline-flex rounded-md shadow-sm m-4'>
        {compData?.map((c) => {
            return(<CompFinderItem ticker={c.symbol} />)
        })}
    </div>
  )
  
}

export default CompFinder