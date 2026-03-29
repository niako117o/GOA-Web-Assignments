// 1) შექმენით უპარამეტრო ფუნქცია რომელიც გამოიტანს მისალმებას: "Hello {თქვენი სახელი}", გამოიყენეთ hoisting ის მეთოდი რომ გამოიძახოთ ფუნქცია
greet()
function greet(){
    console.log("Hello Nia")
}

// 2) შექმენით ფუნქცია რომელიც გამოიტანს ორი რიცხვის ჯამს, გამოიყენეთ hoisting ის მეთოდი რომ გამოიძახოთ ფუნქცია
add(5,6)
function add(a,b){
    console.log(a + b)
}

// 3) შექმენით ფუნქცია რომელსაც გადაეცემა პარამეტრად სახელი, და გამოიტანს მისალმებას: "Hello <name> glad to meet you", გამოიყენეთ hoisting ის მეთოდი რომ გამოიძახოთ ფუნქცია
greet2("Nia")
function greet2(name){
    console.log("Hello", name, "glad to meet you")
}