import Image from 'next/image'

export default function NewsLetter() {
    return (
        <div className='bg-[#efb503] lg:bg-[#e7ad03] lg:rounded-md flex lg:flex-row flex-col lg:justify-between overflow-hidden'>
            <Image src={'/assets/any_question.jpg'} width={396} height={45} alt='newletter' className='lg:w-[396px] w-full lg:h-full' />
            <div className='lg:w-[604px] lg:h-[223px]  lg:flex lg:items-center lg:justify-center'>

                <div className='space-y-3  pb-5 lg:pb-0'>


                    <p className='text-center font-bold'>Get an answer in 24 hours from our experts</p>

                    <div className='flex lg:flex-row flex-col gap-3 lg:gap-0 px-3'>
                        <input
                            type='text'
                            placeholder='Ask or search your question'
                            className='px-2 py-2 lg:w-[450px] w-full pl-5 rounded-l-md rounded-r-md lg:rounded-r-none lg:rounded-l-md'
                        />
                        <button className='bg-[#ed1c24] py-2 px-3 rounded-l-md rounded-r-md lg:rounded-l-none lg:rounded-r-md text-white  '>
                            Ask
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}
