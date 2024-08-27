import { faFacebook, faFacebookF, faInstagram, faLinkedin, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className='border-t mt-3 bg-white'>
            <div className='grid  grid-cols-1 lg:grid-cols-2 lg:w-[1220px] mx-auto py-7 px-3'>

                <div className='space-y-4 flex flex-col items-start lg:items-start '>
                    <Image src={'/assets/TP-logo.png'} width={92} height={20} alt='logo' />
                    <div className='space-y-2 pl-1'>
                        <p className='text-[15px] font-bold '>Follow US</p>
                        <div className='flex gap-4 text-[#7b7984]'>
                            <FontAwesomeIcon icon={faFacebook} width={19} className='hover:text-blue-400 cursor-pointer' />
                            <FontAwesomeIcon icon={faInstagram} width={19} className='hover:text-blue-400 cursor-pointer'/>
                            <FontAwesomeIcon icon={faWhatsapp} width={19} className='hover:text-blue-400 cursor-pointer'/>
                            <FontAwesomeIcon icon={faLinkedin} width={19} className='hover:text-blue-400 cursor-pointer' />
                        </div>
                    </div>

                </div>

                <div className='grid grid-cols-2 lg:grid-cols-3 gap-y-6 lg:gap-y-0 mt-3 lg:mt-0 text-[#7b7984] font-roboto text-[14px] leading-6  lg:px-0 pt-3 lg:pt-0'>
                    {
                        footerData?.map((item, index) => (
                            <div className='space-y-2'>
                                <p className='font-bold text-[15px]'>{item.title}</p>
                                <div>
                                    {item.links.map((item, index) => <p className='hover:text-blue-400'>
                                        <Link href={item.link}>
                                            {item.name}
                                        </Link>
                                    </p>)}
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>

            <p className='border-t text-center text-[#7b7984] text-[14px] py-3'>
                ©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.
            </p>
        </div>
    )
}


const footerData = [
    {
        title: "Company",
        links: [
            {
                name: "Who We Are?",
                link: "https://www.tyreplex.com/about-us"
            },
            {
                name: "Are you a Tyre Dealer?",
                link: "https://www.tyreplex.com/dealer-details"
            },
        ]
    },
    {
        title: "Links",
        links: [
            {
                name: "Privacy Policy",
                link: "https://www.tyreplex.com/privacy-policy"
            },
            {
                name: "Terms of use",
                link: "https://www.tyreplex.com/terms-of-use"
            },
        ]
    },
    {
        title: "Resources",
        links: [
            {
                name: "Contact Us",
                link: "https://www.tyreplex.com/contact"
            },
            {
                name: "Career",
                link: "https://www.tyreplex.com/career"
            },
            {
                name: "Shipping & Return Policy",
                link: "https://www.tyreplex.com/shipping-return-policy"
            },
        ]
    },
]