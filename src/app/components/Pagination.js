import React from 'react'
import CommonButton from './CommonButton'

const pages = ["1", "...", "11", "12", "13", "14", "15", "16", "17", "18"]

const Pagination = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className='flex' style={{ width: "50%" }}>
                <CommonButton extraClasses={"px-14px"} text={"Previous"} />
                <div className='flex items-center'>
                    {pages.map((page) => {
                        return (
                            <div className='cursor-pointer mx-4px text-14 text-black30 hover:bg-blue hover:text-white rounded text-center pt-6px' style={{ height: 28, width: 28 }} key={page}>{page}</div>
                        )
                    })}
                </div>

                <CommonButton extraClasses={"px-14px"} text={"Next"} />
            </div>
        </div>
    )
}

export default Pagination