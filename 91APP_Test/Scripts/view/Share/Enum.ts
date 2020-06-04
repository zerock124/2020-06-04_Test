export const GetOrderStatus = (date: number | null) => {
    switch (date) {
        case 0:
            return 'Payment completed';
        case 1:
            return 'To be shipped';
        default:
            return '-'
    }
}