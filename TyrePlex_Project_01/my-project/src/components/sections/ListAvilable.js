import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ListAvilable({ list }) {
    return (
        <ul className='grid lg:grid-cols-3 text-[14px] font-[600] tracking-wide pt-2 '>

            {
                list.map((item, index) =>
                    <li className='flex items-center  gap-2' key={index}>
                        <FontAwesomeIcon icon={faCheck} width={12} className='text-green-500' />
                        <p className='capitalize leading-7'>{item?.service}</p>
                    </li>
                )
            }



        </ul>
    )
}
