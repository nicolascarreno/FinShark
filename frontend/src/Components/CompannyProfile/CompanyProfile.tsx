import React, { useEffect, useState } from 'react'
import { CompanyKeyMetrics } from '../../Types/Company';
import { useOutletContext } from 'react-router-dom';
import { getKeyMetrics } from '../../Services/Companies';
import RatioList from '../RatioList/RatioList';
import { formatLargeNonMonetaryNumber, formatRatio } from '../../Helpers/NumberFormatting';

type Props = {}

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) =>
      formatLargeNonMonetaryNumber(company.marketCap),
    subTitle: "Total value of all a company's shares of stock",
  },
  {
    label: "Current Ratio",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.currentRatioTTM),
    subTitle:
      "Measures the companies ability to pay short term debt obligations",
  },
  {
    label: "Return On Equity",
    render: (company: CompanyKeyMetrics) => formatRatio(company.returnOnEquityTTM),
    subTitle:
      "Return on equity is the measure of a company's net income divided by its shareholder's equity",
  },
  {
    label: "Return On Assets",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.returnOnTangibleAssetsTTM),
    subTitle:
      "Return on assets is the measure of how effective a company is using its assets",
  },
  {
    label: "Free Cashflow Yield",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.freeCashFlowYieldTTM),
    subTitle:
      "Free cash flow generated relative to the company's market capitalization",
  },
  {
    label: "Tangible Asset Value TTM",
    render: (company: CompanyKeyMetrics) =>
      formatLargeNonMonetaryNumber(company.tangibleAssetValueTTM),
    subTitle:
       "Net worth of a company excluding intangible assets like goodwill and patents",
  },
  {
    label: "EV / EBITDA",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.evToEBITDATTM),
    subTitle: "Compares a company's total value, including debt, to its operating earnings",
  },
  {
    label: "Capex To Revenue TTM",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.capexToRevenueTTM),
    subTitle:
      "Share of revenue a company spends on acquiring and maintaining physical assets",
  },
  {
    label: "Graham Number",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.grahamNumberTTM),
    subTitle:
      "This is the upperbouind of the price range that a defensive investor should pay for a stock",
  },
  {
    label: "PE Ratio",
    render: (company: CompanyKeyMetrics) => company.earningsYieldTTM ? formatRatio(1 / company.earningsYieldTTM) : "N/A",
    subTitle:
      "This is the upperbouind of the price range that a defensive investor should pay for a stock",
  },
];

const CompanyProfile = (props: Props) => {
  
  const ticker = useOutletContext<string>();
  const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();
  
  useEffect(() => {
    const getCompanyKeyMetrics = async () => {
      const result = await getKeyMetrics(ticker);
      console.log(result);
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