import Image from "next/image"
import Link from "next/link"
import autodigg from "../Images/autodiggftr.svg"
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import {FacebookShareButton,InstapaperShareButton, TwitterShareButton} from "react-share";

const Footer = () => {
  return (
    <div>
        <footer className="flex flex-col  ">
            <section className="flex px-[60px] pt-[64px] py-[36px] justify-between bg-[#28293D] ">
                <section className="flex flex-col gap-[24px] ">
                    <div className="h-[36px] w-[132px] ">
                        <Link href="/">
                            <a><Image src={autodigg} alt="nav logo" /></a>
                        </Link>
                    </div>
                    <div className="font-[400] text-[14px] leading-[24px] w-[424px] text-[#8F90A6]">
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </section>
                <section className="flex flex-col justify-between">
                    <section className="flex gap-[36px] justify-end">
                        <div>
                            <FacebookShareButton quote='autodigg- Used & New Cars' hashtag='#autodigg' url="https://autodigg.vercel.app/" >
                                <FaFacebook size={24} fill="#FFFFFF" />
                            </FacebookShareButton>
                        </div>
                        <div>
                            <TwitterShareButton url="https://autodigg.vercel.app/" >
                                <FaTwitter size={24} fill="#FFFFFF" />
                            </TwitterShareButton>
                        </div>
                        <div>
                            <InstapaperShareButton url="https://autodigg.vercel.app/" >
                                <FaInstagram size={24} fill="#FFFFFF" />
                            </InstapaperShareButton>
                        </div>
                    </section>
                    <section className="flex gap-[32px] justify-start">
                        <div><Link href="/"><a className="font-[500] text-[14px] leading-[24px] text-[#FFFFFF]">How It Works</a></Link></div>
                        <div><Link href="/"><a className="font-[500] text-[14px] leading-[24px] text-[#FFFFFF]">Blog</a></Link></div>
                        <div><Link href="/"><a className="font-[500] text-[14px] leading-[24px] text-[#FFFFFF]">Frequently asked questions</a></Link></div>
                        <div><Link href="/"><a className="font-[500] text-[14px] leading-[24px] text-[#FFFFFF]">Are you a dealer?</a></Link></div>
                        <div><Link href="/"><a className="font-[500] text-[14px] leading-[24px] text-[#FFFFFF]">Contact Us</a></Link></div>
                    </section>
                </section>
            </section>
            <section className="flex justify-between px-[60px] py-[24px] bg-[#1C1C28] ">
                <div className="flex items-center font-[400] text-[10px] leading-[12px] text-[#8F90A6] ">
                    <p className="">© AutoDigg 2021, All Rights Reserved</p>
                </div>
                <div className="flex gap-[32px] font-[600] text-[10px] leading-[16px] text-[#FFFFFF]">
                     <p>Terms of Services</p>
                     <p>Privacy Policy</p>
                </div>
            </section>
        </footer>
    </div>
  )
}

export default Footer