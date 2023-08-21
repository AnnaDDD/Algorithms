// Максимальная выгода от активностей, второстепенно заполняемость по времени.
// зал для конференций работает с 9:00 до 17:00
// заявки с 9:00 до 13:00 стоят 1 единицу
// заявки с 13:00 до 17:00 стоят 2 единицы
// заявки на пересечении в большую сторону до 13:00 стоят 1 ед
// например с 11 до 14 стоит 1 ед
// заявки на пересечении в большую сторону после 13:00 стоят 2 ед 
// например с 12 до 16 стоит 2 ед
  
class Booking {
    constructor(start, end, cost) {
        this.start = start;
        this.end = end;
        this.cost = cost;
    }
}

function maximizeProfit(bookings) {
    bookings.sort((a, b) => a.end - b.end);
    
    const dp = [];
    dp[0] = bookings[0].cost;
    
    const selectedBookings = [];
    selectedBookings[0] = -1;
    
    for (let i = 1; i < bookings.length; i++) {
        let maxCost = bookings[i].cost;
        let selectedIndex = -1;
        
        for (let j = 0; j < i; j++) {
            if (bookings[j].end <= bookings[i].start) {
                if (dp[j] + bookings[i].cost > maxCost) {
                    maxCost = dp[j] + bookings[i].cost;
                    selectedIndex = j;
                }
            }
        }
        
        dp[i] = maxCost;
        selectedBookings[i] = selectedIndex;
    }
    
    let maxProfit = Math.max(...dp);
    let currentBookingIndex = dp.indexOf(maxProfit);
    const selectedIndices = [];
    
    while (currentBookingIndex !== -1) {
        selectedIndices.unshift(currentBookingIndex);
        currentBookingIndex = selectedBookings[currentBookingIndex];
    }
    
    const selectedBookingsInfo = selectedIndices.map(index => bookings[index]);
    
    return { maxProfit, selectedBookingsInfo };
}

const bookings = [
    new Booking(9, 13, 1),
    new Booking(11, 14, 1),
    new Booking(12, 16, 2),
    new Booking(14, 16, 2)
];

const result = maximizeProfit(bookings);
console.log("Max Profit:", result.maxProfit);
console.log("Selected Bookings:", result.selectedBookingsInfo);


