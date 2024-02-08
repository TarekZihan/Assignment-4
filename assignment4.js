function calculateMoney(ticketSale) {
    if (0 <= ticketSale) {
        const perTicketCost = 120;
        const perStaffCost = 50;
        const totalStaff = 8;
        const careTakerCost = 500;

        const totalTicketCost = perTicketCost * ticketSale;

        const staffCost = (perStaffCost * totalStaff);
        const totalCost = careTakerCost + staffCost;

        const totalProfit = totalTicketCost - totalCost;
        return totalProfit;
    }
    else {
        return 'Invalid Number'
    }

}
const calculateResult = calculateMoney(10)
console.log(calculateResult);


function checkName(name) {
    if (typeof name == "string") {
        const toLower = name.toLocaleLowerCase();
        if (toLower[toLower.length - 1] === "a" || toLower[toLower.length - 1] === 'y' || toLower[toLower.length - 1] === "i" || toLower[toLower.length - 1] === 'e' || toLower[toLower.length - 1] === 'o' || toLower[toLower.length - 1] === 'u' || toLower[toLower.length - 1] === 'w') {
            return "Good Name"
        } else {
            return "Bad Name";
        }
    } else {
        return 'invalid';
    }

}

console.log(checkName("RAFEE"));



