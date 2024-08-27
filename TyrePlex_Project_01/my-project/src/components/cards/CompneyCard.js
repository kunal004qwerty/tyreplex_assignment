import Image from 'next/image'
import React from 'react'

export default function CompneyCard({ data }) {
    return (
        <div className='min-w-[211px] min-h-[86px] border shadow-sm  p-2  mt-4 rounded-md'>
            <Image src={data?.logo} width={168} height={40} alt='compneyLogo' className='w-full h-[50px] object-contain'  />
            <p className='capitalize text-center py-2 font-semibold'>{data?.name}</p>
        </div>
    )
}
