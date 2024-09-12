// function
function myFunc (a, b) {
    return a * b
}
// console.log(myFunc(30, 3))

function condition (a, b) {
    if (a > b) {
        return "a is greater than b"
    } else {
        return "b is greater than a"
    }
}
// console.log(condition(15, 9))

const ageVote = (num) => {
    if (num < 18) {
        return "You are not eligible to vote."
    } else {
        return "Please, vote wisely"
    }
}
// console.log(ageVote(26))

const reduceCharge = (balance) => {
    if (balance < 50) {
        return "your balance is too low. Pls, recharge"
    } else {
        return "continue to recharge"
    } 
}
// console.log(reduceCharge(1009))

const forLoop = (i) => {
    let nums = ""

    for (i = 3; i < 15; i++) {
        nums += [i] + ", "
    }
    return nums
}
// console.log(forLoop(3))

const students = ["Bola", "Ade", "John", 'Obi', "Musa", 'Jane', "Ade", "John", "Ade"]
const loopNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const auto = [
    {model: "toyota", color: "green"},
    {model: "tesla", color: "gray"},
    {model: "ford", color: "black"},
    {model: "benz", color: "yellow"},
    {model: "bmw", color: "orange"},
    {model: "camry", color: "black"},
]

const newMap = loopNumbers.map((num) => num * 2)
// console.log(newMap)
const eachFor = auto.filter((item) => item.color === "black")
// console.log(eachFor)

const findAuto = auto.find((item) => item.color === "black")
// console.log(findAuto)

const findAutoIndex = auto.findIndex((item) => item.color === "orange")
// console.log(findAutoIndex)

const someStudents = students.some((item) => item === "Ade")
// console.log(someStudents)

const everyStudents = students.every((item) => item === "Ade")
// console.log(everyStudents)

// const includeStudents = students.includes("Kola")
const includeStudents = () => {
    if (students.includes("John")) {
        return "John"
    } else {
        students.push("John")
        return "John has been added to the array"
    }
}
// console.log(includeStudents())
// console.log(students.toString())
// console.log(students.join('-'))

// console.log(loopNumbers.slice(2, 8))
console.log(loopNumbers.splice(3, 4))

