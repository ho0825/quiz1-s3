console.log("hello world")
let message = "benr"
console.log(message, typeof message)

message = 1234
console.log(message, typeof message)

let str = "BENR"
let num = 3523

let course = str + num
console.log(course, typeof course)

let str2 = "1.228"
let num2 = 1

let total = parseFloat(str2) + num2
let total2 = total.toFixed(2)
console.log(total2, typeof total2 + "\n")

array1 = ["HO", "KHOO", "TAN"]
console.log(array1[1])
console.log(array1[2])
console.log(array1[3] + "\n")


let user = {
    name : "Ho Zhe Heng", 
    age : 22, 
    faculty : "FKEKK"
}
console.log(user.name)
console.log(user.age)
console.log(user.faculty + "\n")

let comments = [
    {
        name : "Ho Zhe Heng",
        date : "3/30/2023",
        msg : "Very good",
        like : 1500
    },
    {
        name : "Khoo",
        date : "3/31/2023",
        msg : "Very bad",
        like : 3000
    }
]

console.log(comments[0].name)
console.log(comments[0].date)
console.log(comments[0].msg)
console.log(comments[0].like)