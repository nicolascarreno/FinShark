import React, { useEffect, useState } from 'react'
import { CompanyTenK } from '../../Types/Company';
import { getTenK } from '../../Services/Companies';
import TenKFinderItem from './TenKFinderItem/TenKFinderItem';
import Spinner from '../Spinner/Spinner';

type Props = {
    ticker: string;
}

const TenKFinder = ({ ticker }: Props) => {
  
  const [companyData, setCompanyData] = useState<CompanyTenK[]>();
  useEffect(() => {
    const tenK = async () => {
        const result = await getTenK(ticker);
        setCompanyData(result?.data);
    }
    tenK();
  }, [])
  
  return (
    <div>
        {companyData? (
            companyData?.map((tenK) => {
                return <TenKFinderItem tenK={tenK}/>
            })
        ) : (
            <Spinner /> 
        )}
    </div>
  )
}

export default TenKFinder