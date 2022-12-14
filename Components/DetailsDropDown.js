import React,{useState,useRef,useEffect} from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';
import Checkbox from './Checkbox';
import SmallCheckBox from './SmallCheckBox';

const DetailsDropDown = ({dropDownTitle,data1,data2,data3,data4,data5,title1,title2,title3,title4,title5,state1,state2,state3,state4,state5,setState1,setState2,setState3,setState4,setState5}) => {
    const [dropDown, setDropDown] = useState(false);
    const ref = useRef();

  return (
    <div>
         <div className="flex flex-col border-t-[1px] border-solid border-[#E4E4EB] ">
                  <div  className={` ${dropDown ? " block px-[16px] py-[20px] ": "block px-[16px] py-[15px]" }  flex items-center justify-between overflow-hidden  bg-[#f2f2f5]  `} 
                  ref={ref}
                  onClick={(e) =>{ 
                    // {console.log('here 1')}
                    e.preventDefault()
                    e.stopPropagation()
                    setDropDown(!dropDown)}}>
                    <p className='font-[600] text-[16px] leading-[24px] text-[#28293D]'>{dropDownTitle}</p>
                    <IoIosArrowDown fill='#28293D' size={14} className= {` ${dropDown ?  "rotate-180  ": "rotate-0 " } transition-all ease-in-out duration-100`} />
                  </div>
                  <div className={` ${dropDown ? " max-h-[1800px] ": "max-h-[0px] hidden " }  overflow-hidden transition-all ease-in-out duration-200 p-[16px] flex flex-col gap-[21px]  `}>
                  {(dropDownTitle == "Style" || dropDownTitle == "Performance" || dropDownTitle =="Features" ) ? (<div className='flex flex-col gap-[16px]'>
                {data1 && 
                <div className='flex flex-col gap-[12px] '>
                        <div className=''>
                            <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">{title1}</p>
                        </div>
                        <div className='flex flex-col gap-[12px]  '>
                
                  {data1 && Object.entries(data1).map(([model,total]) => { 
                            {/* here model is key and total is value  */}
                  return (
                        <>
                          <SmallCheckBox model={model} total={total} allState={state1} setAllState={setState1} />
                        </>
                        )
                })
                }
                </div>
                </div>
                }
                {data2 && 
                <div className='flex flex-col gap-[12px] '>
                        <div className=''>
                            <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">{title2}</p>
                        </div>
                        <div className='flex flex-col gap-[12px]  '>
                
                  {data2 && Object.entries(data2).map(([model,total]) => { 
                            {/* here model is key and total is value  */}
                  return (
                        <>
                          <SmallCheckBox model={model} total={total} allState={state2} setAllState={setState2} />
                        </>
                        )
                })
                }
                </div>
                </div>
                }
                {data3 && 
                <div className='flex flex-col gap-[12px] '>
                        <div className=''>
                            <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">{title3}</p>
                        </div>
                        <div className='flex flex-col gap-[12px]   '>
                
                {data3 && Object.entries(data3).map(([model,total]) => { 
                            {/* here model is key and total is value  */}
                  return (
                        <>
                          <SmallCheckBox model={model} total={total} allState={state3} setAllState={setState3} />
                        </>
                        )
                })
                }
                </div>
                </div>
                }
                {data4 && 
                <div className='flex flex-col gap-[12px] '>
                        <div className=''>
                            <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">{title4}</p>
                        </div>
                        <div className='flex flex-col gap-[12px]  '>
                
                {data4 && Object.entries(data4).map(([model,total]) => { 
                            {/* here model is key and total is value  */}
                  return (
                        <>
                          <SmallCheckBox model={model} total={total} allState={state4} setAllState={setState4} />
                        </>
                        )
                })
                }
                </div>
                </div>
                }
                {data5 && 
                <div className='flex flex-col gap-[12px] '>
                        <div className=''>
                            <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">{title5}</p>
                        </div>
                        <div className='flex flex-col gap-[12px]  '>
                
                {data5 && Object.entries(data5).map(([model,total]) => { 
                            {/* here model is key and total is value  */}
                  return (
                        <>
                          <SmallCheckBox model={model} total={total} allState={state5} setAllState={setState5} />
                        </>
                        )
                })
                }
                </div>
                </div>
                }
                    </div>
                    ) : 
                    (<div>
                          <div className='flex flex-col gap-[16px] py-[16px] '>
                          <div className="flex gap-[10px] items-center">
                            <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                            <div className='flex gap-[4px] '>
                                <AiFillStar fill='#FFD912' size={20} />
                                <AiFillStar fill='#FFD912'  size={20}  />
                                <AiFillStar fill='#FFD912'  size={20}  />
                                <AiFillStar fill='#FFD912'  size={20}  />
                                <AiFillStar fill='#FFD912'  size={20}  />
                            </div>
                            <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">only</label>
                          </div>
                          <div className="flex gap-[10px] items-center">
                            <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                            <div className='flex gap-[4px] '>
                                <AiFillStar fill='#FFD912'  size={20}  />
                                <AiFillStar fill='#FFD912'  size={20}  />
                                <AiFillStar fill='#FFD912'  size={20}  />
                                <AiFillStar fill='#FFD912'  size={20}  />
                            </div>
                            <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">and above</label>
                          </div>
                          <div className="flex gap-[10px] items-center">
                            <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                            <div className='flex gap-[4px] '>
                                <AiFillStar fill='#FFD912'  size={20}  />
                                <AiFillStar fill='#FFD912'  size={20}  />
                                <AiFillStar fill='#FFD912'  size={20}  />
                            </div>
                            <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">and above</label>
                          </div>
                          <div className="flex gap-[10px] items-center">
                            <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                            <div className='flex gap-[4px] '>
                                <AiFillStar fill='#FFD912'  size={20}  />
                                <AiFillStar fill='#FFD912'  size={20}  />
                            </div>
                            <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">and above</label>
                          </div>
                          <div className="flex gap-[10px] items-center">
                            <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                            <div className='flex gap-[4px] '>
                                <AiFillStar fill='#FFD912'  size={20}  />
                            </div>
                            <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">and above</label>
                          </div>
                          </div>
                    </div>)}
                  </div>
            </div>
    </div>
  )
}

export default DetailsDropDown