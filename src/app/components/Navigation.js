import Image from 'next/image'
import React from 'react'

const Navigation = ({ menu }) => {
    return (
        <div className='bg-black h-full p-16px' style={{ width: 220 }}>
            <div className='flex-col'>
                <div className='flex items-center justify-between '>
                    <div className='flex items-center'>
                        <div className='rounded'
                            style={{
                                height: 39,
                                width: 39,
                                backgroundColor: "white"
                            }}>

                        </div>
                        <div className='ml-12px'>
                            <div className='text-15 font-medium'>Nishyan</div>
                            <div className='underline text-13'>Visit Store</div>
                        </div>
                    </div>
                    <div>
                        <img src='/Chevron Down.svg'/>
                    </div>
                </div>
                <div className='mt-24px'>
                    {menu.map((item) => {
                        return (
                            <div className='flex py-8px mb-4px text-14 font-medium' key={item}><Image style={{ marginRight: 12 }} width={20} height={20} alt='' src={`/${item}.svg`} />{item}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Navigation