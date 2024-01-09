const pages = ["1", "...", "11", "12", "13", "14", "15", "16", "17", "18"]
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

const menu = ["Home", "Orders", "Products", "Delivery", "Marketing", "Analytics", "Payments", "Tools", "Discounts", "Audience", "Appearance", "Plugins"]

const transactionHeadings = ["Order ID", "Order date", "Order amount", "Transaction fees"]


export {
    pages, record, menu, transactionHeadings
}