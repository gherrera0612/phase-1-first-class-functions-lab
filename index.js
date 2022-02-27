// Code your solution in this file!
const drivers = [ 'Antonia', 'Nuru' , 'Amari', 'Mo' ];
function returnFirstTwoDrivers (drivers) {
return drivers.slice(0,2);
}
// using .slice to return first two drivers

function returnLastTwoDrivers (drivers){
    return drivers.slice(2,4);
}
//using .slice to return last two drivers

const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers];
// used to decide which set of drivers we will use

const createFareMultiplier = function (multiplyValue) {
return function (value) {
    return multiplyValue * value;
}
}
//returns a function and mutliplies given by value using the
//create multiplier

const fareDoubler = createFareMultiplier(2);
//doubles createdfaremultiplier

const fareTripler = createFareMultiplier(3);
//triples createdfaremultiplier

const selectDifferentDrivers = function (drivers, dReturn) {
return dReturn (drivers);

}
