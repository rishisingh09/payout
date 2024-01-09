import React from 'react'
import CommonButton from './CommonButton'

const pages = ["1", "...", "11", "12", "13", "14", "15", "16", "17", "18"]

const Pagination = () => {
    return (
        <div className='w-full flex justify-center pt-24px'>
            <div className='flex' style={{ width: "50%" }}>
                <CommonButton height={32} width={100} imageBefore={true} extraClasses={"px-12px"} text={"Previous"} image={"./ArrowLeft.svg"}/>
                <div className='flex items-center'>
                    {pages.map((page) => {
                        return (
                            <div className='cursor-pointer mx-4px text-14 text-black30 hover:bg-blue hover:text-white rounded text-center pt-6px' style={{ height: 28, width: 28 }} key={page}>{page}</div>
                        )
                    })}
                </div>

                <CommonButton height={32} width={74} extraClasses={"px-12px"} text={"Next"} image={"./ArrowRight.svg"} />
            </div>
        </div>
    )
}

export default Pagination