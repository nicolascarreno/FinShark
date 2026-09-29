import React from 'react'
import { testIncomeStatementData } from './TestData'

const data = testIncomeStatementData; 

type Props = {}

const configs = [
    {
        label: "Year",
        render: (company: any) => company.acceptedDate,
    },
    {
        label: "Cost Of Revenue",
        render: (company: any) => company.costOfRevenue,
    }
]

const Table = (props: Props) => {
  
  const renderedRows = data.map((company) => {
    return(
        <tr key={`${company.cik}-${company.date}`}>
            {configs.map((val: any) => {
                return(
              <td key={val.label} className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {val.render(company)}
                    </td>
                )
            })}
        </tr>
    )
  })

  const renderedHeaders = configs.map((config: any) => {
    return(
         <th
        className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        key={config.label}
      >
        {config.label}
      </th>
    );
  })

  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <table>
            <thead className="bg-gray-50">
              <tr>{renderedHeaders}</tr>
            </thead>
            <tbody>{renderedRows}</tbody>
        </table>
    </div>
  )
}

export default Table