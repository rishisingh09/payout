import React from 'react'
import SearchBar from './SearchBar'

const Header = () => {
    return (
        <div className='flex items-center justify-between px-32px py-12px'>
            <div className='flex items-center'>
                <div className='text-black12 text-15'>Payments</div>
                <div className='text-black30 flex ml-16px text-12'><img className='mr-6px' src='/Question.svg' />How it works</div>
            </div>
            <SearchBar
                placeholder={'Search features, tutorials, etc.'}
            />
            <div className='flex'>
                <div className='rounded-full bg-black90 flex flex-center' style={{ height: 40, width: 40 }}>< img className='ml-10px' width={15} src='/Group.svg' /></div>
                <img className='ml-12px' src='/Icon.svg' />
            </div>
        </div>
    )
}

export default Header