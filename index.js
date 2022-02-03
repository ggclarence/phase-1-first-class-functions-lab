// Code your solution in this file!
// const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
//    index#        0        1       2       3
//    count#        1        2       3       4
const returnFirstTwoDrivers = function(array){
  return array.slice(0,2);
}
const returnLastTwoDrivers = function(array){   
    return array.slice(array.length -2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]



function createFareMultiplier(multiplier){
   return function fareMultiplier (fare){ return fare * multiplier}

}
const fareDoubler = function(fare){
    const doubler = createFareMultiplier(2);
    return doubler(fare) 
}


const fareTripler = function(fare){
    const tripler = createFareMultiplier(3)
    return tripler(fare)
}

function selectDifferentDrivers(driversArray,firstOrLast){
console.log(firstOrLast(driversArray))
    return firstOrLast(driversArray)

}

