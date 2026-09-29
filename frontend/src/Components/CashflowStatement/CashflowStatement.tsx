import React, { useContext, useEffect, useState } from 'react'
import { CompanyCashFlow } from '../../Types/Company';
import { useOutletContext } from 'react-router-dom';
import { getCashFlowStatement } from '../../Services/Companies';
import Table from '../Table/Table';

type Props = {}

const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) => company.operatingCashFlow,
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      company.netCashUsedForInvestingActivites,
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      company.netCashUsedProvidedByFinancingActivities,
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) => company.cashAtEndOfPeriod,
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) => company.capitalExpenditure,
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) => company.commonStockIssued,
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) => company.freeCashFlow,
  },
];


const CashflowStatement = (props: Props) => {
  
  const ticker = useOutletContext<string>();
  const [cashflowStatement, setCashflowStatement] = useState<CompanyCashFlow[]>();

  useEffect(() => {
    const companyCashFlowStatement = async () => {
        const result = await getCashFlowStatement(ticker!);
        setCashflowStatement(result!.data)
    }
    companyCashFlowStatement();
  }, [])
  

  return (
    <>
        {cashflowStatement ? (
            <Table data={cashflowStatement} config={config} />
        ) : (
            <h1>No results</h1>
        )}
    </>
  )
}

export default CashflowStatement