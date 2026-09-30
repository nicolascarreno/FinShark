import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router';
import { formatLargeMonetaryNumber, formatRatio } from '../../Helpers/NumberFormatting';
import { CompanyIncomeStatement } from '../../Types/Company';
import { getIncomeStatement } from '../../Services/Companies';
import { config } from 'process';
import Table from '../Table/Table';
import Spinner from '../Spinner/Spinner';

type Props = {}

const configs = [
  {
    label: "Date",
    render: (company: CompanyIncomeStatement) => company.date,
  },
  {
    label: "Revenue",
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.revenue),
  },
  {
    label: "Cost Of Revenue",
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.costOfRevenue),
  },
  {
    label: "Depreciation",
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.depreciationAndAmortization),
  },
  {
    label: "Operating Income",
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.operatingIncome),
  },
  {
    label: "Income Before Taxes",
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.incomeBeforeTax),
  },
  {
    label: "Net Income",
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.netIncome),
  },
  {
    label: "Net Income Ratio",
    render: (company: CompanyIncomeStatement) =>
      formatRatio(company.netIncome / company.revenue),
  },
  {
    label: "Earnings Per Share",
    render: (company: CompanyIncomeStatement) => formatRatio(company.eps),
  },
  {
    label: "Earnings Per Diluted",
    render: (company: CompanyIncomeStatement) =>
      formatRatio(company.epsDiluted),
  },
  {
    label: "Gross Profit Ratio",
    render: (company: CompanyIncomeStatement) =>
      formatRatio(company.grossProfit / company.revenue),
  },
  {
    label: "Opearting Income Ratio",
    render: (company: CompanyIncomeStatement) =>
      formatRatio(company.operatingIncome / company.revenue),
  },
  {
    label: "Income Before Taxes Ratio",
    render: (company: CompanyIncomeStatement) =>
      formatRatio(company.incomeBeforeTax / company.revenue),
  },
];

const IncomeStatement = (props: Props) => {
  
  const ticker = useOutletContext<string>();
  const [IncomeStatement, setIncomeStatement] = useState<CompanyIncomeStatement[]>();

  useEffect(() => {
    const getCompanyIncomeStatement = async () => {
      const result = await getIncomeStatement(ticker);
      setIncomeStatement(result?.data)
    }
    getCompanyIncomeStatement();
  }, [])

  return (
    <>
      {IncomeStatement ? (
        <>
          <Table config={configs} data={IncomeStatement}/>
        </>
        ) : (
          <div className="bg-white shadow rounded-lg ml-4 mt-4 mb-4 p-4 sm:p-6 w-full flex justify-center">
            <Spinner inline />
          </div>
        )}
    </>
  )
}

export default IncomeStatement