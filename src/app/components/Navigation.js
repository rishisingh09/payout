import Image from 'next/image'
import React from 'react'
import ProfilePicture from './ProfilePicture'

const Navigation = ({ menu }) => {
    return (
        <div className='bg-black p-16px' style={{ width: 220 }}>
            <div className='flex-col' style={{ height: "95%" }}>
                <div className='flex items-center justify-between '>
                    <ProfilePicture />
                    <div className='cursor-pointer'>
                        <img src='/Chevron Down.svg' />
                    </div>
                </div>
                <div className='mt-24px'>
                    {menu.map((item) => {
                        return (
                            <div className='flex py-8px mb-4px text-14 font-medium cursor-pointer' key={item}><Image style={{ marginRight: 12 }} width={20} height={20} alt='' src={`/${item}.svg`} />{item}</div>
                        )
                    })}
                </div>
            </div>
            <div className='bg-black11 rounded py-6px px-12px flex'>
                <div className='bg-black10 rounded items-center py-8px px-6px'
                    style={{ height: 36, width: 36 }}
                >
                    <img src='/Wallet.svg' />
                </div>
                <div className='pl-12px'>
                    <div className='text-13'>Available credits</div>
                    <div className='text-16'>222.10</div>
                </div>
            </div>
        </div>
    )
}

export default Navigation