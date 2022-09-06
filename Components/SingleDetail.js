import React from 'react'
import Link from "next/link"
import { BsArrowLeftCircle } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';
import { IoMdStar } from 'react-icons/io';
import Image from "next/image"
import car from "../Images/car.svg"
import cal from "../Images/cal.svg"
import hash from "../Images/hash.svg"
import clock from "../Images/clock.svg"
import color from "../Images/color.svg"
import fuel from "../Images/fuel.svg"
import transmission from "../Images/transmission.svg"
import stearing from "../Images/stearing.svg"
import Engine from "../Images/Engine.svg"
import GallarySlider from './GallarySlider';
import { RWebShare } from "react-web-share";

const SingleDetail = ({carByVin}) => {
    
  return (
    <div>
        <div className='px-[60px] py-[40px] flex justify-between'>
            <div className='flex gap-[16px] '>
                <div className='py-[5px] '><Link href="/" ><a>
                    <BsArrowLeftCircle size={36} fill="#FF8800" className="shadow-[0px_8px_16px_-6px_rgba(254,110,6,0.46)] rounded-full " /></a></Link>
                </div>
                <div className='flex flex-col gap-[8px] '>
                    <div className='flex gap-5 font-[700] text-[32px] leading-[44px] text-[#28293D] '>
                        <p>{carByVin?.year} {carByVin?.make} {carByVin?.model}</p>
                        <RWebShare
                            data={{
                            title: "Autodigg - Used & New Cars",
                            }}
                            onClick={() => console.log("shared successfully!")}
                        >
                            <div>
                                <sup className='flex items-center px-[10px] py-[2px] rounded-[10px] shadow-[0px_8px_16px_-6px_rgba(254,110,6,0.46)]  bg-gradient-to-r from-[#FF8800] to-[#E63535]  text-[#FFFFFF] gap-[2px]'>
                                    <button className='font-[500] text-[14px] leading-[24px] btn-text-cardShadow '>Share 🔗</button>
                                </sup>
                            </div>
                        </RWebShare>
                    </div>
                    <div className=" font-[400] text-[12px] text-[#8F90A6] leading-[16px]">
                        <p>{carByVin?.dealership} • {carByVin?.milage} Mileage • {carByVin?.exterior_color}</p>
                    </div>
                    <div className=" font-[400] text-[12px] text-[#8F90A6] leading-[16px]">
                        <p>{carByVin?.city}, {carByVin?.state}</p>
                    </div>
                </div>
            </div>
            <div className='flex gap-[40px]'>
                <div className='flex'>
                    <div className="font-[600] text-[28px] text-[#28293D] leading-[38px]">
                        <p>${carByVin?.price.toLocaleString('en-US')}</p>
                    </div>
                    <div className="flex items-start italic font-[400] text-[12px]  text-[#FFFFFF] leading-[16px] px-[8px] py-[12px] ">
                        <p className="bg-[#8F90A6] px-[6.5px] rounded-full">i</p>
                    </div>
                </div>
                <div>
                    <div className="flex items-center px-[16px] py-[6px] rounded-[10px] shadow-[0px_8px_16px_-6px_rgba(254,110,6,0.46)]  bg-gradient-to-r from-[#FF8800] to-[#E63535]  text-[#FFFFFF] gap-[2px] ">
                        <p className="font-[500] text-[14px] leading-[24px] btn-text-cardShadow">Invite dealer</p>
                        <FiSend size={12} className="btn-text-cardShadow"  />
                    </div>
                </div>
            </div>    
        </div>
        {carByVin?.car_offers &&
        <div className='bg-[#FFF8E6] px-[112px] py-[24px] flex flex-col gap-[16px] '>
            <div className="flex gap-[4px] items-center">
                <IoMdStar className="flex items-center rounded-full border-solid border-[1px] border-[#05A660] "  fill='#05A660' size={14} />
                <p className="font-[600] text-[12px] leading-[20px] text-[#05A660] uppercase">Special offers</p>
            </div>
            <div className="flex gap-[16px]  "> 
                <div>
                    <p className='font-[400] text-[14px] leading-[24px] text-[#28293D]'>•  {carByVin?.car_offers.split(",")[0].replace(/[\[\]'"]/g, '')}</p>
                </div>  
                <div>
                    <p className='font-[400] text-[14px] leading-[24px] text-[#28293D]'>•  {carByVin?.car_offers.split(",")[1].replace(/[\[\]'"]/g, '')}</p>
                </div>
            </div>
        </div>
            }
        <div className=''>
            <GallarySlider carByVin={carByVin} />
        </div>
        <div className='px-[60px] py-[32px] bg-[#FAFAFC] '>
            <div className='p-[36px] bg-[#FFFFFF] rounded-[10px] shadow-[0px_0px_2px_rgba(40,41,61,0.04),0px_4px_8px_rgba(96,97,112,0.16)] flex flex-col gap-[36px] '>
                <div>
                    <p className='font-[700] text-[32px] leading-[44px] text-[#28293D]'>Car details</p>
                </div>
                <div className='flex flex-col gap-[60px] max-w-[1320px] max-h-[388px] flex-wrap '>
                    <div className='flex gap-[16px] max-w-[360px] items-start'>
                        <div className='bg-[#E4E4EB] py-[6px] px-[10px] rounded-[8px] '>
                            <Image src={car} alt="nav logo" height={13} width={16} />
                        </div>
                        <div>
                            <p className='font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase'>Car type</p>
                            <p className='font-[500] text-[14px] leading-[20px] text-[#28293D]'>{carByVin?.car_type}</p>
                        </div>
                    </div>
                    <div className='flex gap-[16px] max-w-[360px] items-start'>
                        <div className='bg-[#E4E4EB] py-[6px] px-[10px] rounded-[8px]  '>
                            <Image src={cal} alt="nav logo" height={13} width={16} />
                        </div>
                        <div>
                            <p className='font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase'>Year</p>
                            <p className='font-[500] text-[14px] leading-[20px] text-[#28293D]'>{carByVin.year}</p>
                        </div>
                    </div>
                    <div className='flex gap-[16px] max-w-[360px] items-start'>
                        <div className='bg-[#E4E4EB] py-[6px] px-[10px] rounded-[8px] '>
                            <Image src={hash} alt="nav logo" height={13} width={16} />
                        </div>
                        <div>
                            <p className='font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase'>VIN</p>
                            <p className='font-[500] text-[14px] leading-[20px] text-[#28293D]'>{carByVin.vin}</p>
                        </div>
                    </div>
                    <div className='flex gap-[16px] max-w-[360px] items-start'>
                        <div className='bg-[#E4E4EB] py-[6px] px-[10px] rounded-[8px] '>
                            <Image src={clock} alt="nav logo" height={13} width={16} />
                        </div>
                        <div>
                            <p className='font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase'>Mileage</p>
                            <p className='font-[500] text-[14px] leading-[20px] text-[#28293D]'>{carByVin.milage}</p>
                        </div>
                    </div>
                    <div className='flex gap-[16px] max-w-[360px] items-start'>
                        <div className='bg-[#E4E4EB] py-[6px] px-[10px] rounded-[8px] '>
                            <Image src={color} alt="nav logo" height={13} width={16} />
                        </div>
                        <div>
                            <p className='font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase'>Exterior color</p>
                            <p className='font-[500] text-[14px] leading-[20px] text-[#28293D]'>{carByVin.exterior_color}</p>
                        </div>
                    </div>
                    <div className='flex gap-[16px] max-w-[360px] items-start'>
                        <div className='bg-[#E4E4EB] py-[6px] px-[10px] rounded-[8px] '>
                            <Image src={fuel} alt="nav logo" height={13} width={16} />
                        </div>
                        <div>
                            <p className='font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase'>Fuel</p>
                            <p className='font-[500] text-[14px] leading-[20px] text-[#28293D]'>{carByVin.fuel_type}</p>
                        </div>
                    </div>
                    <div className='flex gap-[16px] max-w-[360px] items-start'>
                        <div className='bg-[#E4E4EB] py-[6px] px-[10px] rounded-[8px] '>
                            <Image src={car} alt="nav logo" height={13} width={16} />
                        </div>
                        <div>
                            <p className='font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase'>Trim</p>
                            <p className='font-[500] text-[14px] leading-[20px] text-[#28293D]'>{carByVin.trim}</p>
                        </div>
                    </div>
                    <div className='flex gap-[16px] max-w-[360px] items-start'>
                        <div className='bg-[#E4E4EB] py-[6px] px-[10px] rounded-[8px] '>
                            <Image src={transmission} alt="nav logo" height={13} width={16} />
                        </div>
                        <div>
                            <p className='font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase'>Transmission</p>
                            <p className='font-[500] text-[14px] leading-[20px] text-[#28293D]'>{carByVin.transmission}</p>
                        </div>
                    </div>
                    <div className='flex gap-[16px] max-w-[360px] items-start'>
                        <div className='bg-[#E4E4EB] py-[6px] px-[10px] rounded-[8px] '>
                            <Image src={stearing} alt="nav logo" height={13} width={16} />
                        </div>
                        <div>
                            <p className='font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase'>Drivetrain</p>
                            <p className='font-[500] text-[14px] leading-[20px] text-[#28293D]'>{carByVin.drivetrain}</p>
                        </div>
                    </div>
                    <div className='flex gap-[16px] max-w-[360px] items-start '>
                        <div className='bg-[#E4E4EB] py-[6px] px-[10px] rounded-[8px]  '>
                            <Image src={Engine} alt="nav logo" height={15} width={20}  />
                        </div>
                        <div>
                            <p className='font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase'>Engine</p>
                            <p className='font-[500] text-[14px] leading-[20px] text-[#28293D] '>{carByVin.engine_description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-[60px] py-[32px] bg-[#FAFAFC] '>
            <div className='p-[36px] bg-[#FFFFFF] rounded-[10px] shadow-[0px_0px_2px_rgba(40,41,61,0.04),0px_4px_8px_rgba(96,97,112,0.16)] flex flex-col gap-[36px] '>
                <div>
                    <p className='font-[700] text-[32px] leading-[44px] text-[#28293D]'>Other features</p>
                </div>
                <div className='flex gap-8 max-w-[1320px] h-auto flex-wrap '>
                {carByVin.features1.split(",").map((data) => {
                return(
                    <div key={data.vin} className='flex gap-[16px] min-w-[360px] items-start'>
                        <div className="max-w-[360px]">
                            <p className='line-clamp-2 font-[500] text-[14px] leading-[20px] text-[#28293D]'>{data.replace(/[\[\]'"*]+/g, "")}</p>
                        </div>
                    </div>
                )})
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleDetail