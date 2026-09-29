import React, { useEffect, useState } from 'react'
import { CompanyKeyMetrics } from '../../Types/Company';
import { useOutletContext } from 'react-router-dom';
import { getKeyMetrics } from '../../Services/Companies';
import RatioList from '../RatioList/RatioList';

type Props = {}

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) => company.marketCapTTM,
  },
  {
    label: "Current Ratio",
    render: (company: CompanyKeyMetrics) => company.currentRatioTTM,
  },
  {
    label: "Return On Equity",
    render: (company: CompanyKeyMetrics) => company.roeTTM,
  },
  {
    label: "Cash Per Share",
    render: (company: CompanyKeyMetrics) => company.cashPerShareTTM,
  },
  {
    label: "Current Ratio",
    render: (company: CompanyKeyMetrics) => company.currentRatioTTM,
  },
  {
    label: "Return On Equity",
    render: (company: CompanyKeyMetrics) => company.roeTTM,
  },
];

const CompanyProfile = (props: Props) => {
  
  const ticker = useOutletContext<string>();
  const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();
  
  useEffect(() => {
    const getCompanyKeyMetrics = async () => {
      const result = await getKeyMetrics(ticker);
      setCompanyData(result?.data[0]);
    }
    getCompanyKeyMetrics();
  }, [])

  return (
    <>
      {companyData ? (
        <RatioList data={companyData} config={tableConfig} />
      ) : (
        <>Loading...</>
      )}
    </>
  )
}

export default CompanyProfile