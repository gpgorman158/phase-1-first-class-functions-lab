const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (driverArray) => {
    return [driverArray[0],driverArray[1]];
}
console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = function (driverArray) {
    return driverArray.slice(2,4);
}
console.log(returnLastTwoDrivers(drivers));

function selectDifferentDrivers (arrayDrivers, functionDrivers) {
    return functionDrivers(arrayDrivers);
}
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers[0](drivers));

function createFareMultiplier (multi) {
    return function (fare) {
         return multi * fare };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

