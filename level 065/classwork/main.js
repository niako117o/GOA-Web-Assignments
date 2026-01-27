// 1) ცვლადში შეინახეთ თქვენი სახელი, შემდეგ random გამოყენებით დაპრინტეთ რენდომ ინდექსზე მყოფი ასოები თქვენი სახელიდან
const name = "Nia"
const randomIndex = Math.trunc(Math.random() * name.length)
console.log(firstname[randomIndex])


// 2) დააკონსოლლოგეთ რიცხვები 0 დან 9 მდე რანდომის გამოყენებით

console.log(Math.random() * 9)

// 3) შექმენით 3 ცვლადი სადაც შეინახავთ 3 ივე მონაცემთა ტიპს, String, Number და Boolean, და შეამოწმეთ typeof ფუნქციით მათი მონაცემთა ტიპი

let str = "String";
console.log(typeof str);

let num = 5;
console.log(typeof num)

let bulioni = false
console.log(typeof bulioni)


// 4) შექმენით list სადაც იქნება ინტეჯერები შეტანილი, თქვენი დავალებაა რომ დაპრინტოთ პირველ ინდექსზე, შუა ინდექსზე და ბოლო ინდექსზე მყოფი რიცხვების ჯამი

let list = [1,2,3,4,5];

let first = list[0]
let shua = list[3]
let bolo = list[-1]
console.log(first + shua + bolo);

// 5) რეებს გამოიტანს ეს კოდები კონსოლში:

// 1. 5 < 6 true
// 2. 10 >= 10 true
// 3. 7 != 3 true
// 4. "5" == 5 false
// 5. "5" === 5 false

// დაწერეთ კომენტარით პასუხები