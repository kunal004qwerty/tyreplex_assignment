import React from 'react'

export default function CustomCrousel({ Extrastyles, list, cards: Card, keyName = "" }) {
    return (
        <div className={`flex overflow-x-scroll ${Extrastyles}`} id='custom_scroll'>
            {
                list.map((item, index) => <Card data={item} key={`${keyName}-${index}`} />)
            }
        </div>
    )
}
