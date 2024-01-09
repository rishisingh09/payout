import Image from 'next/image'
import Navigation from './components/Navigation'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CommonButton from './components/CommonButton'
import SummaryCard from './components/SummaryCard'
import TransactionsLog from './components/TransactionsLog'
import Pagination from './components/Pagination'

export default function Home() {
  return (
    <div className='h-full flex bg-offwhite' style={{}}>
      <Navigation />
      <div className='h-full '
        style={{ width: 1220 }}
      >
        <Header />
        <div className='p-32px flex-col'>
          <div className='flex justify-between'>
            <div className='text-black12 text-20 font-medium'>Overview</div>
            <CommonButton
              text={'Last Month'}
              image={'/ArrowDownBlack.svg'}
              extraClasses={"px-14px"}
            />
          </div>
          <div className='flex justify-between mt-24px'>
            <SummaryCard description={"Online orders"} value={231} />
            <SummaryCard description={"Amount Received"} value={"₹23,92,312.19"} />
          </div>
          <div className='mt-32px bg-white'>
            <div className='text-black12 text-20 font-medium pl-16px pt-16px'>Transactions | This Month</div>
            <div className=' p-15px flex justify-between mt-20px'>
              <SearchBar
                placeholder={'Search by order ID...'}
                extraClasses={'border border-black85 bg-white'}
                backgroundColor='white'
                width={328}
              />
              <div className='flex'>
                <CommonButton text={'Sort'} image={'/Sorting.svg'} width={79} extraClasses={"mr-12px px-14px"} />
                <CommonButton image={'/Download.svg'} width={36} paddingX='0' extraClasses={'flex-center pl-8px'} />
              </div>
            </div>
            <TransactionsLog />
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  )
}