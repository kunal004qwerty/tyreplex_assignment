import CustomCrousel from "@/utils/CustomCrousel";
import { GoogleReviewData, OfficeImgData } from "@/utils/dummyData";
import { faClock, faLocationPin, faPhone, faShield, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import ReviewCard from "../cards/ReviewCard";

export default function AgentSection() {
    return (
        <div className='lg:w-[1220px] border lg:shadow-sm mx-auto p-3 lg:p-5 bg-white'>

            <div className="flex flex-col lg:flex-row gap-3 items-center">
                <p className="font-bold text-[22px]">SHREE HEMKUNT TYRES AND SERVICES</p>

                <div className="lg:flex items-center gap-1 text-[#5aa033] hidden ">
                    <FontAwesomeIcon icon={faShield} className="w-[15px]" />
                    <p className="text-[14px]">Verified</p>
                </div>
            </div>


            <div className="flex flex-col lg:flex-row">

                <div className="lg:w-[560px] space-y-2">

                    <div className="text-[14px] flex items-center gap-3 py-3">
                        <div className='bg-[#4ca72c] text-white flex items-center px-2 gap-1 rounded-md w-fit'>
                            <FontAwesomeIcon icon={faStar} className=" w-[12px] h-[10px]" />
                            <p className="">5</p>
                        </div>

                        <p className="underline underline-offset-2">2278 Reviews</p>

                        <button className="border border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-black px-2 py-1 rounded-md"> Rate</button>

                    </div>


                    {/* Address */}
                    <div className="flex text-[14px] font-roboto tracking-wide ">
                        <div className="lg:w-[50px] w-[40px] flex justify-center items-center">
                            <FontAwesomeIcon icon={faLocationPin} width={15}  className="text-slate-500" />
                        </div>
                        <p className="flex-1 ">PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014</p>
                    </div>

                    {/* Time */}
                    <div className="flex text-[14px] font-roboto tracking-wide text-slate-500 ">
                        <div className="lg:w-[50px] w-[40px] flex justify-center items-center ">
                            <FontAwesomeIcon icon={faClock} width={15} className="" />
                        </div>
                        <p className="flex-1 ">Open - Monday to Sunday - 10:00AM to 8:00PM</p>
                    </div>

                    {/* Mobile No */}
                    <div className="flex text-[14px] font-roboto tracking-wide text-slate-500  ">
                        <div className="lg:w-[50px] w-[40px] flex justify-center items-center ">
                            <FontAwesomeIcon icon={faPhone} width={15} className="" />
                        </div>
                        <p className="flex-1 ">+91 9876543210</p>
                    </div>

                    {/* Directions */}
                    <button className="bg-[#ed1c24] font-semibold text-white py-2 px-8 rounded-md ">
                        Get Direction
                    </button>


                </div>

                <div className="lg:w-[650px] relative ">

                    <div className="flex gap-2  overflow-x-scroll" id="custom_scroll">

                        {
                            OfficeImgData.map((item, index) =>
                                <div className="min-w-[300px] min-h-[200px] flex items-center justify-start  " key={`shop-${index}`}>
                                    <Image src={item?.url} width={300} height={163} alt="img" className="object-cover rounded-md" />
                                </div>
                            )
                        }


                    </div>

                    <div className="flex items-center gap-1 bg-[#5aa033] text-white px-3 py-1 rounded-md lg:hidden absolute bottom-6 left-1">
                        <FontAwesomeIcon icon={faShield} className="w-[15px]" />
                        <p className="text-[14px]">Verified</p>
                    </div>
                </div>
            </div>




            <div className="mt-[50px]">
                <p className="font-semibold text-[20px]">Google Reviews</p>

                <CustomCrousel
                    Extrastyles={"mt-2 pb-3 gap-[30px]"}
                    list={GoogleReviewData}
                    cards={ReviewCard}
                    keyName="Review"
                />
            </div>


        </div>
    )
}
