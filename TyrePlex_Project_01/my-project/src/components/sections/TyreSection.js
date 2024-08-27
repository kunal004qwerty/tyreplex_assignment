import { TyperCardData } from '@/utils/dummyData'
import React from 'react'
import { TyreCard } from '../cards/TyreCard'

export default function TyreSection() {
    return (
        <div className='lg:w-[1220px] mx-auto lg:pt-4 pt-3'>
            <p className='font-bold text-[20px] mb-3 lg:mx-0 mx-3'>Tyres Sold by this Dealer</p>

            <div className="grid lg:grid-cols-3 justify-center gap-y-3 pt-4">

                {
                    TyperCardData.map((item, index) => (
                        <TyreCard data={item} key={`tyre-${index}`} />
                    ))
                }

            </div>

        </div>
    )
}
