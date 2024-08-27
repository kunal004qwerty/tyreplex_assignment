import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

export default function ReviewCard({ data }) {
    return (

        <div className="border min-w-[327px] min-h-[240px] shadow-md p-3 flex flex-col justify-between rounded-md font-roboto">
            <div>

                <div className="flex items-center gap-8 mb-4">

                    <Image src={data?.imageUrl}
                        width={60} height={80} alt="Person_img" className="rounded-full"
                    />
                    <p className="font-semibold text-lg">{data?.name}</p>
                </div>
                <p className="text-[14px] text-[#787779] leading-[21px] tracking-tight">
                    {data?.testimony}
                </p>

            </div>
            <div className="flex justify-between mb-3">
                <div className="flex gap-1">
                    <FontAwesomeIcon icon={faStar} className="text-[#eb9f0c] w-[16px] h-[16px]" />
                    <FontAwesomeIcon icon={faStar} className="text-[#eb9f0c] w-[16px] h-[16px]" />
                    <FontAwesomeIcon icon={faStar} className="text-[#eb9f0c] w-[16px] h-[16px]" />
                    <FontAwesomeIcon icon={faStar} className="text-[#eb9f0c] w-[16px] h-[16px]" />
                    <FontAwesomeIcon icon={faStar} className="text-[#eb9f0c] w-[16px] h-[16px]" />
                </div>
                <p className="text-[14px] text-[#9a9897]">Reviewed on {data?.date}</p>
            </div>
        </div>
    )
}
