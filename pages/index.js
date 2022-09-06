import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../styles/Home.module.css'
import LandingDetails from '../Components/LandingDetails'
import { useSelector } from 'react-redux'
import Head from 'next/head'
// import {wrapper} from "./Redux-store/store"
// import {getAllCar,getCarCount,getMake,getModel,getBodyType,getExtColor,getIntColor,getTransmission,getDriveTrain,getFuelType,getFeatures,getCarByType} from "./Redux-store/homePageSlice"

export default function Home(props) {
  // const dispatch = useDispatch(); 
  // const {status } = useSelector((state) => state.carsDataSlice);

  // console.log(allCar,"count")

  // useEffect(() => {
  //   status=="IDLE" &&
  //       dispatch(fetchAllCarData());     
  // }, [])

  // const dispatch = useDispatch(); 
  // const {status ,counts} = useSelector((state) => state.carsDataSlice); 
  const { make ,model ,bodyType,exteriorColor,interiorColor,driveTrain,allCar,count,transmission,fuelType,features } = useSelector((state) => state.homePageSlice)
 
  return (
    <>
      <Head>
        <meta name="title" content='autodigg'/>        
        <meta name="og:title" content='autodigg  - New & Used Cars'/> 

        <meta property="og:type" name="og:type" content="website" />
        <meta property="og:site_name" name="og:site_name" content="autodigg" />
        <meta property="og:url" name="og:url" content="https://autodigg.vercel.app/" />  
        <meta name="og:title" property="og:title" content="autodigg" />
        <meta name="og:description" property="og:description" content="autodigg - New & Used Cars" />

       
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="og:image" property="og:image" content="https://autodigg.vercel.app/Images/site-img.png" />  
        <link rel="canonical" href="https://autodigg.vercel.app/" />
           
      </Head>  
      <div className={`flex justify-center items-center ${styles.container}`}>
      <div className='w-[1520px]'>
        {/* <Navbar />  */}
        <LandingDetails props={props}  />
        {/* <Footer /> */}
      </div>
      </div>
    </>
  )
}


// export const getStaticProps = async () => {
// export async function getServerSideProps(){
//   const response = await axios.get("https://autodigg.com/ad-api/cars/list?car_type=Used+car%2CNew+car%2CCertified+pre-owned&page=1&radius=100&year=2011%2C2021&return=count")
//   const count = await response.data

//   const allCarsRes = await axios.get("https://autodigg.com/ad-api/cars/list?usedCar=true&car_type=Used+car&page=1&radius=100")
//   const allCars = await allCarsRes.data
  
//   const allCarsMakeRes = await axios.get("https://autodigg.com/ad-api/cars/list?return=make")
//   const carMake = await allCarsMakeRes.data

//   const allCarsModelRes = await axios.get("https://autodigg.com/ad-api/cars/list?make=&return=model")
//   const carModel = await allCarsModelRes.data

//   const allCarsTypeRes = await axios.get("https://autodigg.com/ad-api/cars/list?return=body_type")
//   const carType = await allCarsTypeRes.data
  
//   const allCarsBTypeRes = await axios.get("https://autodigg.com/ad-api/cars/list?make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=body_type")
//   const carStyle = await allCarsBTypeRes.data

//   const allCarsEcolourRes = await axios.get("https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=exterior_color")
//   const carEcolur = await allCarsEcolourRes.data

//   const allCarsIcolourRes = await axios.get("https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=interior_color")
//   const carIcolur = await allCarsIcolourRes.data

//   const allCarsTransRes = await axios.get("https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=transmission")
//   const carTrans = await allCarsTransRes.data

//   const allCarsDriveTrainRes = await axios.get("https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=drivetrain")
//   const carDrive = await allCarsDriveTrainRes.data

//   const allCarsFuleTRes = await axios.get("https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=fuel_type")
//   const carFuel = await allCarsFuleTRes.data

//   const allCarsFeaturesRes = await axios.get("https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=features")
//   const carFeature = await allCarsFeaturesRes.data

//   return {
//     props:{
//       count : count,
//       allCars,
//       carMake : carMake,
//       carModel : carModel,
//       carType : carType,
//       carStyle : carStyle,
//       carEcolur : carEcolur,
//       carIcolur : carIcolur,
//       carTrans : carTrans,
//       carDrive : carDrive,
//       carFuel : carFuel,
//       carFeature : carFeature,
//     },
//   } 
// }

// (store) => async () => {
  export async function getServerSideProps() {
  // export const getServerSideProps = wrapper.getServerSideProps(
  // (store) => async () => {
    const base_url = "https://autodigg.com/ad-api/cars/list?usedCar=false&car_type=Used+car,New+car,Certified+pre-owned&page=1&radius=100&newCar=false";

    const response = await axios.all([
      axios.get(base_url),
      axios.get(`${base_url}&return=count`),
      axios.get(`${base_url}&return=body_type`),
      axios.get(`${base_url}&return=exterior_color`),
      axios.get(`${base_url}&return=interior_color`),
      axios.get(`${base_url}&return=transmission`),
      axios.get(`${base_url}&return=drivetrain`),
      axios.get(`${base_url}&return=fuel_type`),
      axios.get(`${base_url}&return=features`),
      axios.get(`https://autodigg.com/ad-api/cars/list?return=make`),
      axios.get(`https://autodigg.com/ad-api/cars/list?make=&return=model`)
    ])

    // store.dispatch(getAllCar(response[0].data));
    // store.dispatch(getCarCount(response[1].data.count))
    // store.dispatch(getBodyType(response[2].data ? response[2].data : null))
    // store.dispatch(getExtColor(response[3].data))
    // store.dispatch(getIntColor(response[4].data))
    // store.dispatch(getTransmission(response[5].data))
    // store.dispatch(getDriveTrain(response[6].data))
    // store.dispatch(getFuelType(response[7].data))
    // store.dispatch(getFeatures(response[8].data))
    // store.dispatch(getMake(response[9].data))
    // store.dispatch(getModel(response[10].data))

    return {
      props: {
        allCar : response[0].data,
        count : response[1].data.count,
        bodyType : response[2].data,
        exteriorColor : response[3].data,
        interiorColor : response[4].data,
        transmission : response[5].data,
        driveTrain : response[6].data,
        fuelType : response[7].data,
        features : response[8].data,
        make : response[9].data,
        model : response[10].data,
      }, 
    }
  }