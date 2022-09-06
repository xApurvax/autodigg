import { useRouter } from 'next/router'
import React from 'react'
import axios from 'axios'
import SingleDetail from '../../Components/SingleDetail'
import Head from 'next/head'

const CarDetail = ({carByVin}) => {
    const router =useRouter()
    const  {carId} = router.query
  // console.log(carByVin)
  return (
    <>
    <Head>
      <meta name="og:image" property="og:image" content={carByVin.photo && carByVin[0]?.photo[0]} />
      <meta name="og:title" content={`${carByVin[0].make} ${carByVin[0].model}`} />
      <meta name="og:description" content={`${carByVin[0].delership} ${carByVin[0].exterior_color}`} />
      <meta name="og:image:width" content="1200" />
      <meta name="og:image:height" content="630" />
    </Head> 
    <div className='max-w-[1520px] mx-auto'>
        <SingleDetail carByVin={carByVin[0]}  />
    </div>
    </>
  )
}

export default CarDetail

export async function getServerSideProps(context){
  const {carId} = context.params;
  // console.log(carId);
  const response = await axios.get(`https://autodigg.com/ad-api/cars/list?vin=${carId}`)
  const carByVin = await response.data

  return {
    props:{
      carByVin : carByVin,
    },
  } 
}