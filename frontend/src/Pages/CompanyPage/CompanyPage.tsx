import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CompanyProfile } from '../../Types/Company';
import { getCompanyProfile } from '../../Services/Companies';

interface Props {}

const CompanyPage = (props: Props) => {
 
  let { ticker } = useParams();
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
          <div>{companyProfile.symbol}</div>
      ) : (
          <div>Company not found</div>
      ) }
    </>
  );
};

export default CompanyPage