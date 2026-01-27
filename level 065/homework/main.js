// 1) შექმენით 9 ცვლადი, 9შივე შეინახეთ სამივე მონაცემთა ტიპი, და typeof გამოყენებით შეამოწმეთ მათი ტიპები

let number = 5
console.log(typeof number);

let string = "Nia"
console.log(typeof string);

let bool = true
console.log(typeof bool);

let undefined;
console.log(undefined);

let null1 = null
console.log(null1)






// 2) შექმენით ერთი ლისთი სადაც გექნებათ მანქანის ბრენდები შეტანილი, თქვენი დავალებაა რომ ყოველ გაშვებაზე რანდომ ინდექსზე მყოფი ლისთის ელემენტი დაიპრინტოს
let cars = ['Porsche', "Mercedes", "BMW"]
let randomIndex = Math.trunc(Math.random() * cars.length)
console.log(cars[randomIndex]);


// 3) ჩამოთვალეთ ყველა შედარების ოპერატორი რაც ვიცით jsში და თითოზე გააკეთეთ 2-2 მაგალითი

//> < , >= <=, == , === , !=

console.log(5 > 5) // false
console.log(5 < 5) // false
console.log(5 >= 5) // true
console.log(5 <= 5) // true
console.log(5 == "5") //true რადგან არ ამომებს მკაცრად და უბრალოდ ამოწმებს შიგთავსი იგივეა თუ არა
console.log(5 === "5") //false რადგან მკაცრია და მთლიანად ამოწმებს
console.log(5 != 5) // false 

// 4) რენდომით დაპრინტეთ რიცხვები 1 დან 100 ჩათვლით და თან დაამგრვალეთ რომელიმე Math object მეთოდით
console.log(math.ceil(math.random() * 100))


// 5) მომხმარებელს prompt გამოყენებით შემოატანინეთ string, შეინახეთ ცვლადში და რენდომით ყოველ გაშვებაზე ამოიღეთ ერთი რენდომ ინდექსზე მყოფი ასო

let string2 = prompt("enter your word: ")
let RandomIndex = Math.truch(math.random() * string2.length)
console.log(string2[RandomIndex])