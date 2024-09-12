
// if & else statement
const voteAge = (age) => {

    if (age < 18) {
        return "Not eligible to vote"
    } else {
       return "Eligible to vote"
    }

}

// console.log(voteAge(14))

const greet = (x, y) => {
    if (x > y) {
        return ("Hello World")
    } else {
        return ("I no dey greet you")
    }
}
// console.log(greet(18, 16))

const dayGreet = () => {
    if (new Date().getHours() < 3) {
        return "Good morning"
    } else {
        return "Good evening"
    }
}
// console.log(dayGreet())


// 'for' loop - iterates through a block of code
const run = (p) => {
    let result = "numbers are: "

    for (let i = 0; i < p; i++) {
        result += i + ' '
    }
    return result
}
// console.log(run(7))

const generateCarList = (cars) => {
    let text = "";
    for (let i = 0, len = cars.length; i < len; i++) {
        text += cars[i] + " ";
    }
    return text;
}

const cars = ["volvo", "toyota", "honda", "ford", "benz"];
// console.log(generateCarList(cars))


const loopFurniture = (fur) => {
    let i = 1;
    let len = fur.length;
    let text = "";

    for (; i < len; i++) {
        text += fur[i] + " "
    }
    return text
}

const fur = ["table", "chair", "biard", "Tv", "radio", "books"];
// console.log(loopFurniture(fur))


// 'for/in' loop - iterates through an object
const forInLoop = () => {
    const person = {fname:"John", lname:"Kay", age: 25}

    let text = '';
    for (let x in person) {
        text += person[x] + " "
    }
    return text
}
// console.log(forInLoop())  //object

const forInArray = () => {
    const numbers = [34, 37, "Dele", true, "Kola"]

    let iteration = "";

    for (let x in numbers) {
        iteration += numbers[x] + " "
    }

    return iteration
}
// console.log(forInArray()) //array


//  "for/of" loop - through the value of an iterable object
const forOfLoop = () => {
    const lang = "javascript"
    let text = "";

    for (let x of lang) {
        text += x + " ";
    }
    return text;
}
// console.log(forOfLoop())


// 'while' loop - execute a block of code as long as the specified condition is true
const whileLoop = (i) => {
    let text = ""

    while (i < 10) {
        text += + i + " " + ",";
        i++;
    }
    return text
}
// console.log(whileLoop(2))



// 'do/while' loop - execute a block of code as long as the specified condition is true
const doWhileLoop = (i) => {
    let text = ""

    do {
        text += i + " ";
        i++
    }
    while (i < 15)

    return text
}
// console.log(doWhileLoop(4))


// function
function calculate (a, b) {
    return a + b
}
// console.log(calculate(4, 7))

// date constructor
const date = new Date().getHours();
// console.log(date)

// sort numbers
const nums = [3, 7, 47, 9, 10, 7, 8]

function sortNums (a, b) {
    return b - a
}
const sortedNums = nums.sort(sortNums);
// console.log(sortedNums)

const alpha = ["c", "a", "v", "b", "d", "u",  "x"]
// console.log(alpha.reverse())

// array map()
const numbers = [3, 7, 9, 10, 30];
const newNumbers = numbers.map((val) => 
     val * 2
)
// console.log(newNumbers)

const addNumber = numbers.map((val) => val + 10)
// console.log(addNumber)

// (array) find, filter, findIndex
const food = [{fruit: "watermelon", color: "green"},{fruit: "apple", color: "yellow"}, {fruit: "carrot", color: "orange"}, {fruit: "cashew", color: "gray"}, {fruit: "banana", color: "yellow"}, {fruit: "orange", color: "yellow"}, {fruit: "strawberry", color: "wine"}]

const newFood = food.find((item) => item.color !== "yellow")
const filterFood = food.filter((item) => item.color !== "yellow")
const findIndex = food.findIndex((item) => item.color === "orange")
// console.log(newFood)
// console.log(filterFood)
// console.log(findIndex)


// (array) indexOf(), lastIndexOf(), some() : [returns a boolean], every() : [return a boolean], includes(), push(), unshift(), pop(), shift(), toString(), join(), slice(), splice(), entries()

const foodArray = ["watermelon", "banana", "apple", "carrot", "orange", "cashew", "orange", "strawberry", "banana"]
const newIndexOf = foodArray.indexOf("banana")
const newLastIndexOf = foodArray.lastIndexOf("banana")
// console.log(newIndexOf)
// console.log(newLastIndexOf)
// console.log(foodArray.some((item) => item === "rice"))
// console.log(foodArray.every((item) => item === "banana"))
// console.log(foodArray.includes("apple", 3))
console.log(foodArray.push("potato"))
// console.log(foodArray.unshift('pawpaw'))
// console.log(foodArray.pop())
// console.log(foodArray.shift())
// console.log(foodArray.toString())
// console.log(foodArray.join("; "))
// console.log(foodArray.slice(2, 7))
// console.log(foodArray.splice(2, 3, 'pineapple'))

// for (let element of foodArray.entries()) {
//     console.log(element)
// }

// (Array) reduce(), reduceRight()
const number = [2, 4, 5, 78, 34, 56]
function reducer(previous, current) {
    return previous + current
}
console.log(number.reduce(reducer, 0))

