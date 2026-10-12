function dayName(date) {
    const daysofWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return daysofWeek[date.getDay()];
}

function greeting(date) {
    return `Today is ${dayName(date)}`;
}