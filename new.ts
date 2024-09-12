const countries = ["Albania", "Canada", "Bolivia", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Japan", "Ireland", "Japan", "Kenya"]

// console.log(countries.pop())
// console.log(countries.shift())
if (countries.includes("Nigeria")) {
    console.log("Nigeria is Available in the Array")
} else {
    countries.unshift("Nigeria")
    console.log("Nigeria has just been added to the array")
}

console.log(countries)


const findEvenOdd = (a, b) => {
    if (a > b) {
        return "a is greater than b"
    }  else {
        return "b is greater than a"
    }
}

// console.log(findEvenOdd(4, 10))