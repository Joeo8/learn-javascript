let age = 15

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

let charge = ""
if (age < 6){
    charge = "free"
}else if (age <= 17){
    charge = "child discount"
}else if (age <= 26){
    charge = "student discount"
}else if (age <= 66){
    charge = "full price"
}else if (age > 66){
    charge = "senior citizen discount"
}else {
    charge = ""
}

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

console.log(charge)