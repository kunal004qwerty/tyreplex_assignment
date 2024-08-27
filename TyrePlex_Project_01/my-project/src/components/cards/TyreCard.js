import { faShield, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export function TyreCard({data}) {
    return (
        <div className='w-[330px] h-[270px] pt-3 pb-3 overflow-hidden '>



            <div className='w-[311px] h-[243px]  shadow-md border p-2 relative cursor-pointer bg-white'>
                <div>
                    <Image src={data?.brandUrl} width={100} height={50} alt="brand Img" className='w-[100px] h-[60px] object-contain' />
                    <p className='uppercase font-semibold text-[14px]'>{data?.model}</p>
                    <p className='text-[14px] py-3 text-[#787779]'>145/80 R12</p>
                    <div className='flex gap-2 items-center'>
                        <div className='bg-[#4ca72c] text-white flex items-center px-1 gap-1 rounded-md'>
                            <FontAwesomeIcon icon={faStar} className=" w-[12px] h-[12px]" />
                            <p>{data?.rating}</p>
                        </div>
                        <p className='text-[12px] text-[#787779]'>{data?.reviews} Reviews</p>
                    </div>
                    <p className='text-[14px] font-semibold pt-2'>₹ 3,247</p>
                    <p className='text-[#4ca72c] text-[12px] pb-2'>{data?.offer ? "Offer available": ""}</p>
                    <p className='text-[12px] text-[#787779]'>{data?.tubeless ? 'tubeless':""}</p>
                </div>
                <div className='flex items-center gap-2 bg-[#fff1c5] px-2 py-1 rounded-md w-fit absolute -top-3 -right-3 shadow-md'>
                    <FontAwesomeIcon icon={faShield} className=' w-[14px] h-[14px]' />
                    <p className='text-[14px] font-semibold tracking-wide '>{data?.warrantyYear} Year Warranty</p>
                </div>

                <div className='absolute -right-[90px] -bottom-9'>
                    <Image src={data?.tyreImg} width={260} height={80} alt="tyreLogo"/>
                </div>
            </div>


        </div>
    )
}