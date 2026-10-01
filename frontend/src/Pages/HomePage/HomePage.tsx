import React, { useEffect } from 'react'
import Hero from '../../Components/Hero/Hero'
import { formatDate } from '../../Helpers/DateFormatting'

interface Props {}

const HomePage = (props: Props) => { 
  return (
    <>
        <Hero />
    </>
  )
}

export default HomePage