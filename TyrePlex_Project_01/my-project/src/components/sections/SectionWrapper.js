import React from 'react'

export default function SectionWrapper({ title, children }) {
    return (
        <div className='lg:w-[1220px] border lg:shadow-sm mx-auto p-3 lg:p-5 bg-white'>
            <p className="font-bold text-[20px] capitalize">{title}</p>
            <>
                {children}
            </>

        </div>
    )
}
