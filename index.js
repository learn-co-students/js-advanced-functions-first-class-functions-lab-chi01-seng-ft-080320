// Code your solution in this file!


const returnFirstTwoDrivers = function(arr){
    let values = arr.slice(0, 2)
    return values
}

const returnLastTwoDrivers = function(arr){
    let values = arr.slice(-2)
    return values
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(val){
    return function (fair){
        return fair * val
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)


function selectDifferentDrivers(arrayOfDrivers, callback) {
    return callback(arrayOfDrivers)
}