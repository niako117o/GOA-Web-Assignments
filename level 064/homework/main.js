// 2) ახსენით დღევანდელი ნასწავლი math მეთოდები, და გააკეთეთ თითოეულზე 3-3 მაგალითი

/*
math.random --> გვაძლევს რანდომულ რიცხვს (გვაძლევს ათწილადს)
math.floor --> ათწილადი დამრგვალდება დაბლა
math.ceil --> ათწილადი დამრგვალდება მაღლა
math.sqrt --> კვადრატური ფესვი
math.cqrt --> კუბური ფესვი
math.max --> დიდ რიცხვს პოულობს
math.min --> პატარა რიცხვს პოულობს

*/
console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.random() * 10);

console.log(Math.floor(2099012.112));
console.log(Math.floor(11233.11123));
console.log(Math.floor(11.1111111111111111));

console.log(Math.ceil(2099012.112));
console.log(Math.ceil(2013.213));
console.log(Math.ceil(2434.2123))

console.log(Math.sqrt(4))
console.log(Math.sqrt(100))
console.log(Math.sqrt(25))

console.log(Math.min(1,23,4,5,7,8,34,2,45,6,35))
console.log(Math.min(742,145,67,8,1,-7,224))
console.log(Math.min(-666,-2352,56,88,32,45))

// 3) შექმენით 5 const, 5 let და 5 var ცვლადი, და შემოიტანეთ String, Number და Boolean მნიშვნელობები, და დაპრინტეთ თითოეული

const name = "niako";
const bool = true;
const age = 15;
const city = "mtskheta"
const FavoriteFood = "ghomi"
console.log(`${name},${bool} ${age}, ${city}, ${FavoriteFood}`)

let name2 = "niako";
const bool2 = true;
let age2 = 15;
let city2 = "mtskheta"
let FavoriteFood2 = "ghomi"
console.log(`${name2},${bool2} ${age2}, ${city2}, ${FavoriteFood2}`)

var name3 = "niako";
const bool3 = true;
var age3 = 15;
var city3 = "mtskheta"
var FavoriteFood3 = "ghomi"
console.log(`${name3},${bool3} ${age3}, ${city3}, ${FavoriteFood3}`)


// 4) ახსენით typeof კუთვნილება, რატომ გამოიყენება და გააკეთეთ თითო თითო მაგალითი Boolean, String და Number ებზე typeof გამოყენებით

//typeof გვეუბნევა მნიშვნელობის მონაცემთა ტიპს
let cat = "BlackCat";
console.log(typeof(cat));

let num = 5;
console.log(typeof(num))

let bulioni = false
console.log(typeof(bulioni))