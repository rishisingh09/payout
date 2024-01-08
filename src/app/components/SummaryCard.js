import React from 'react'

const SummaryCard = ({description, value}) => {
    return (
        <div className='bg-white p-20px flex-col' style={{ width: 566, height: 118, borderRadius: 8 }}>
            <div className='text-black30 text-16'>{description}</div>
            <div className='text-black12 mt-16px text-32 font-medium'>{value}</div>
        </div>)
}

export default SummaryCard