import React from 'react'
import { transactionHeadings, record } from '@/constants'

const TransactionsLog = () => {
    return (
        <div className='text-black12 overflow-y-scroll px-15px'>
            <table className='w-full'>
                <thead className=''>
                    <tr className='bg-black95 py-10px'>
                        {transactionHeadings.map((item, i) => {
                            return (
                                <th className={`py-10px text-14 font-medium relative`} style={{ width: "25%" }} key={item}>{item}{item === "Order date" ? <img className='absolute' style={{ right: 90, top: 17 }} src='/SmallDropDown.svg' /> : item === "Transaction fees" ? <img className='absolute' style={{ right: 65, top: 13 }} src='/SmallInfo.svg' /> : null}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {record.map((val, key) => {
                        return (
                            <tr className='border-b border-black85' key={key}>
                                <td className='text-blue text-center py-14px text-14 font-medium'>{val.orderId}</td>
                                <td className='text-center py-14px text-14'>{val.orderDate}</td>
                                <td className='text-center py-14px text-14'>{val.orderAmount}</td>
                                <td className='text-center py-14px text-14'>{val.transactionFees}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TransactionsLog