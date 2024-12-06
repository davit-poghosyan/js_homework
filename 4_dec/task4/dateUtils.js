function formatDate(date, format) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    if (format == "YYYY-MM-DD") {
        return `${year}-${month}-${day}`;
    } else if (format == "DD-MM-YYYY") {
        return `${day}-${month}-${year}`;
    } else if (format == "MM-DD-YYYY"){
        return `${month}-${day}-${year}`;
    }

}
function isWeekend(date) {
    const day = date.getDay();
    return day === 0 || day === 6;
}
function daysBetween(date1, date2) {
    const diff = Math.abs(date1 - date2);
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}



const today = new Date();
const tomorrow = new Date(today); 
tomorrow.setDate(today.getDate() + 1);


console.log(formatDate(today, "YYYY-MM-DD"))
console.log(formatDate(today, "DD-MM-YYYY"))
console.log(formatDate(today, "MM-DD-YYYY"))


console.log(isWeekend(today))
console.log(isWeekend(tomorrow))



console.log(daysBetween(today, tomorrow))

module.exports = { formatDate, isWeekend, daysBetween };
