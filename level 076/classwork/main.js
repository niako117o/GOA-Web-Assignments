// 1
// შექმენი ცარიელი მასივი და დაამატე მასში 3 რიცხვი push-ის გამოყენებით, შემდეგ დაბეჭდე მასივის length
let list = [];
list.push(1,2,3);
console.log(list);
// 2
// შექმენი მასივი ["apple", "banana"] და დაამატე კიდევ ერთი ელემენტი "orange", შემდეგ დაბეჭდე ბოლო ელემენტი at-ის გამოყენებით
let fruits = ["apple", "banana"];
fruits.push("orange");
fruits.at(-1);
console.log(fruits);

// 3
// შექმენი მასივი [1, 2, 3, 4] და წაშალე ბოლო ელემენტი pop-ის გამოყენებით, შემდეგ დაბეჭდე მასივის length
let numbers = [1, 2, 3, 4];
numbers.pop();
console.log(numbers.length);

// 4
// შექმენი ცარიელი მასივი, შემდეგ push-ით დაამატე 5 სხვადასხვა რიცხვი და შემდეგ 2-ჯერ გამოიყენე pop, ბოლოს დაბეჭდე პირველი ელემენტი
let list2 = [];
list2.push(1,2,3,4,5);
list2.push(8,9)
console.log(list2[0]);

// 5
// შექმენი მასივი ["red", "blue"] და ჯერ დაამატე "green", შემდეგ წაშალე ბოლო ელემენტი და დაბეჭდე მასივის სიგრძე

let color = ["red", "blue"];
color.push("green")
color.pop()
console.log(color)

// 6
// შექმენი ცარიელი მასივი და დაამატე მასში შენი 3 საყვარელი საჭმელი, შემდეგ დაბეჭდე მეორე ელემენტი 

let list3 = [];
list3.push("shaurma", "xinkali", "ghomi");
console.log(list3[1]);

// 7
// შექმენი მასივი [10, 20] და დაამატე კიდევ 2 რიცხვი, შემდეგ ერთი ამოიღე და დაბეჭდე ბოლო ელემენტი at()-ით

let num = [10, 20];
num.push(30,40);
num.pop();
console.log(num.at(-1))

// 8
// შექმენი მასივი ["a", "b", "c"] და pop-ის გამოყენებით წაშალე ორი ელემენტი, შემდეგ დაბეჭდე დარჩენილი ელემენტის სიგრძე

let letters = ["a", "b", "c"];
letters.pop();
letters.pop();
console.log(letters.length);

// 9
// შექმენი ცარიელი მასივი, დაამატე 4 ელემენტი და შემდეგ ყველა ელემენტი ამოიღე pop-ის გამოყენებით
let list5 = []
list5.push("nia1","nia2","nia3","nia4","nia5");
list5.pop()
list5.pop()
list5.pop()
list5.pop()
list5.pop()
console.log(list5)

// 10
// შექმენი მასივი [5] და push-ის გამოყენებით დაამატე კიდევ 3 რიცხვი, შემდეგ დაბეჭდე მესამე ელემენტი at()-ით

let onenum = [5];
onenum.push(1,2,3);
console.log(onenum.at(-2))