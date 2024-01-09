import Image from 'next/image'
import Navigation from './components/Navigation'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CommonButton from './components/CommonButton'
import SummaryCard from './components/SummaryCard'
import TransactionsLog from './components/TransactionsLog'
import Pagination from './components/Pagination'

const record = [
  { orderId: "#100001", orderDate: "2024-01-08", orderAmount: 150.00, transactionFees: 5.00 },
  { orderId: "#100002", orderDate: "2024-01-09", orderAmount: 200.50, transactionFees: 7.50 },
  { orderId: "#100003", orderDate: "2024-01-10", orderAmount: 120.75, transactionFees: 4.25 },
  { orderId: "#100004", orderDate: "2024-01-11", orderAmount: 175.20, transactionFees: 6.20 },
  { orderId: "#100005", orderDate: "2024-01-12", orderAmount: 130.50, transactionFees: 4.75 },
  { orderId: "#100006", orderDate: "2024-01-13", orderAmount: 180.75, transactionFees: 6.50 },
  { orderId: "#100007", orderDate: "2024-01-14", orderAmount: 210.00, transactionFees: 8.00 },
  { orderId: "#100008", orderDate: "2024-01-15", orderAmount: 160.25, transactionFees: 5.75 },
  { orderId: "#100009", orderDate: "2024-01-16", orderAmount: 190.50, transactionFees: 7.25 },
  { orderId: "#100010", orderDate: "2024-01-17", orderAmount: 140.75, transactionFees: 5.50 },
  { orderId: "#100011", orderDate: "2024-01-18", orderAmount: 220.00, transactionFees: 8.50 },
  { orderId: "#100012", orderDate: "2024-01-19", orderAmount: 200.25, transactionFees: 7.00 },
  { orderId: "#100013", orderDate: "2024-01-20", orderAmount: 170.50, transactionFees: 6.25 },
  { orderId: "#100014", orderDate: "2024-01-21", orderAmount: 150.75, transactionFees: 5.50 },
  { orderId: "#100015", orderDate: "2024-01-22", orderAmount: 130.00, transactionFees: 4.50 },
  { orderId: "#100016", orderDate: "2024-01-23", orderAmount: 180.25, transactionFees: 6.75 },
  { orderId: "#100017", orderDate: "2024-01-24", orderAmount: 160.50, transactionFees: 6.00 },
  { orderId: "#100018", orderDate: "2024-01-25", orderAmount: 120.75, transactionFees: 4.25 },
  { orderId: "#100019", orderDate: "2024-01-26", orderAmount: 140.00, transactionFees: 5.00 },
]

const menu = [
  "Home", "Orders", "Products", "Delivery", "Marketing", "Analytics", "Payments", "Tools", "Discounts", "Audience", "Appearance", "Plugins"
]

const transactionHeadings = ["Order ID", "Order date", "Order amount", "Transaction fees"]

export default function Home() {
  return (
    <div className='h-full flex bg-offwhite' style={{}}>
      <Navigation menu={menu} />
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
            <TransactionsLog transactionHeadings={transactionHeadings} record={record} />
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  )
}