import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CompanyProfile } from '../../Types/Company';
import { getCompanyProfile } from '../../Services/Companies';
import Sidebar from '../../Components/Sidebar/Sidebar';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Tile from '../../Components/Tile/Tile';
import { formatLargeMonetaryNumber } from '../../Helpers/NumberFormatting';
import Spinner from '../../Components/Spinner/Spinner';


interface Props {}

const CompanyPage = (props: Props) => {
 
  let { ticker } = useParams<string>();
  const [companyProfile, setCompanyProfile] = useState<CompanyProfile>();

  useEffect(() => {
    const getCompany = async() => {
      const result = await getCompanyProfile(ticker!);
      setCompanyProfile(result?.data[0]);
    }
    getCompany();
  }, []);

  return (
    <>
      { companyProfile ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />
          <CompanyDashboard ticker={ticker!}>
            <Tile title="Company Name" subtitle={companyProfile.companyName}></Tile>
            <Tile title="Price" subtitle={`${companyProfile.price.toString()} USD`}></Tile>
            <Tile title="Sector" subtitle={companyProfile.sector}></Tile>
            <Tile title="Market Cap" subtitle={formatLargeMonetaryNumber(companyProfile.marketCap.toString())}></Tile>
            <p className='bg-white shadow rounded text-medium text-gray p-10'>
              {companyProfile.description}
            </p>
          </CompanyDashboard>
        </div>
      ) : (
          <Spinner />
      ) }
    </>
  );
};

export default CompanyPage