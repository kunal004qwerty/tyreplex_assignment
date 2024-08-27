'use client'

import { NavBar_Accessories_Data, NavBar_BikeTyres, NavBar_CarTyres, NavBar_CommercialTyres_data, NavBar_More_Data } from '@/utils/dummyData'
import { faBars, faCaretDown, faClose, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

export default function NavBar() {
    const [open, setOpen] = useState(false)

    const handleCloseBtn = function () {
        setOpen(false)
    }
    //  `hidden lg:flex gap-6 font-bold font-roboto text-[#000]`

    console.log('opens', open);

    function handleMobileNavBar() {
        console.log("clikc")
        setOpen(true)

    }


    return (
        <div className='bg-white shadow-md border fixed left-0 right-0 h-[52px] top-0 z-30'>
            <div className='lg:w-[1220px] mx-auto flex items-center justify-between h-full px-3 lg:px-0'>
                <div>
                    <Image src={'/assets/TP-logo.png'} width={130} height={20} alt="TP Logo" className='lg:w-[130px] w-[110px]' />
                </div>

                <div className={
                    `lg:static fixed inset-0  bg-opacity-20 ease-in-out transition-all duration-500 bg-black lg:bg-white
                    ${!open && "translate-x-full lg:transform-none"}
                    `
                }>

                    {/* slider */}
                    <div className=' font-bold font-roboto text-[#000] bg-white lg:w-auto w-[75%] h-full max-h-screen overflow-y-auto lg:overflow-visible relative ml-auto lg:ml-0'>


                        {/* mobile_logo */}
                        <div className='h-[100px] py-[34px] px-[30px] relative lg:hidden border-b'>
                            <Image src={'/assets/TP-logo.png'} width={133} height={48} alt='logo' />

                        </div>

                        <div className='lg:flex items-center lg:gap-6 lg:flex-row flex-col justify-start lg:justify-center lg:space-y-0 space-y-[24px] p-[30px] lg:p-0'>



                            <DropDown label={"Car Tyres"}>
                                {
                                    NavBar_CarTyres.map((item, index) => <CustomLink data={item} />)
                                }
                            </DropDown>

                            <DropDown label={"Bike Tyres"}>
                                {
                                    NavBar_BikeTyres.map((item, index) => <CustomLink data={item} />)
                                }
                            </DropDown>

                            <div>
                                <Link href={'https://www.tyreplex.com/tyre-pressure'}>
                                    <p className='hover:underline hover:underline-offset-4 hover:decoration-[#ed1c24] cursor-pointer py-1  text-[14px]'>Tyre Pressure</p>
                                </Link>
                            </div>

                            <DropDown label={"Commercial Tyres"}>
                                {
                                    NavBar_CommercialTyres_data.map((item, index) => <CustomLink data={item} />)
                                }
                            </DropDown>

                            <DropDown label={"Accessories"}>
                                {
                                    NavBar_Accessories_Data.map((item, index) => <CustomLink data={item} />)
                                }
                            </DropDown>


                            <DropDown label={"More"}>
                                {
                                    NavBar_More_Data.map((item, index) => <CustomLink data={item} />)
                                }
                            </DropDown>

                        </div>

                        <div className='p-[30px] lg:p-0 lg:hidden border-t flex items-center gap-3 text-[#7b7984]'>
                            <FontAwesomeIcon icon={faUser} width={15} />
                            <Link href={'https://www.tyreplex.com/login'}>
                                <p className='text-black'>Log In</p>
                            </Link>
                        </div>

                        <button
                            onClick={handleCloseBtn}
                            className='absolute top-3 right-5 lg:hidden'
                        >
                            <FontAwesomeIcon icon={faClose} className='text-[20px]' />
                        </button>

                    </div>

                </div>

                <div className='hidden font-bold font-roboto lg:flex items-center gap-2 text-[#7b7984] cursor-pointer '>
                    <FontAwesomeIcon icon={faUser} width={15} />
                    <Link href={'https://www.tyreplex.com/login'}>
                        <p className='text-black'>Log In</p>
                    </Link>
                </div>

                <div className='flex gap-4 lg:hidden p-3 '>
                    {/* button to open search Modal */}
                    <button>
                        <FontAwesomeIcon icon={faSearch} width={18} />
                    </button>

                    <button onClick={handleMobileNavBar}>
                        <FontAwesomeIcon icon={faBars} width={18} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export function DropDown({
    children,
    label,
    controlledByHover = true,
    onClick = () => { },
    containerStyles = "lg:absolute static top-[100%] lg:inset-x-0 p-1 lg:w-max w-[85%] "
}) {
    const [open, setOpen] = useState(false);
    // const [opacity, setOpacity] = useState("opacity-0")
    const ref = useRef();

    const toggle = () => {
        setOpen((prev) => !prev)
    }

    const handleClickOutSide = function (e) {
        if (ref?.current && !ref?.current?.contains(e.target)) {
            setOpen(false)
        }
    }

    useEffect(() => {
        if (ref?.current) {
            document.addEventListener("mousedown", handleClickOutSide)
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutSide)
        }
    }, [ref])



    return (
        <div className='relative' ref={ref}>
            <button className='hover:underline hover:underline-offset-4 hover:decoration-[#ed1c24] cursor-pointer py-1  lg:text-[14px]'
                {
                ...(controlledByHover ? {
                    onMouseEnter: toggle,
                    onMouseLeave: toggle,
                    onClick
                } : {
                    onClick: toggle
                })
                }
            >
                {label}
                <FontAwesomeIcon
                    icon={faCaretDown}
                    className={`lg:hidden transition-all duration-300 ml-2 ${open ? "rotate-180" : "rotate-0"}`}
                />
            </button>
            {
                open && (
                    <div className={`rounded lg:shadow-lg lg:border bg-white transition-all duration-200 mt-2 lg:mt-0  ${containerStyles}`}
                        onClick={toggle}
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}
                    >
                        {children}
                    </div>
                )
            }
        </div>
    )
}


export function CustomLink({ data }) {
    return (
        <div className='py-1 px-2 hover:bg-slate-100 cursor-pointer font-[500] text-[14px] text-slate-500 lg:text-black'>
            <Link href={data.link}>
                {data.title}
            </Link>
        </div>
    )
}
