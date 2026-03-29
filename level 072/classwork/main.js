// 1) შექმენით ერთი ფუნქცია რომელსაც გადაეცემა ერთი სახელი არგუმენტად, და ასევე გადაეცით default 
// პარამეტრად თქვენი სახელიც, ფუნქციამ უნდა დააბრუნოს მისალმება არგუმენტის გამოყენებით, გამოიყენეთ String Literal
function greet(name = "Nia"){
    console.log(`hello ${name}`)
}
greet()



// 2) შექმენი მთავარი ფუნქცია generateEmail(firstName, lastName).

// მოთხოვნები:
// გამოიყენე helper function cleanText(text)
// helper ფუნქციამ ტექსტი უნდა გადააქციოს პატარა ასოებად
// საბოლოოდ დაბრუნდეს ელფოსტა ფორმატში: first.last@company.com


// გამოიძახეთ ფუნქციები hoisting საშუალებით

function cleanText(text){
   return text.toLowerCase().trim();
}

function createEmail(firstName, lastName, company){
    const first = cleanText(firstName);
    const last = cleanText(lastName);
    const Company = cleanText(company);
    return `${first}.${last}@${Company}.com`
}

console.log(createEmail("nia", "simonia", "gucci"));

// 3) შექმენით ფუნქცია, რომელიც დააგენერირებს რიცხვებს 1 დან 20 მდე, თქვენი დავალებაა რომ string literal ით დაპრინტოთ სტრინგი: "ჩემი რიცხვია {number}" გამოიძახეთ ფუნქცია hoisting საშუალებით

function myNumber(){
    let number = Math.floor(Math.random() * 20)
    console.log(`ჩემი რიცხვია ${number}`)
}
myNumber()


// 4) შექმენი ფუნქცია, რომელსაც გადაეცემა სახელი და default არგუმენტი სახელისთვის ("Guest") ყოველ ჯერზე შექმენით უნიკალური guest-ის ნომერი math.random()-ის გამოყენებით რომ guest-ს მიუწეროთ გვერდით (მაგ: Guest158951) ამ ფუნქციამ უნდა დააბრუნოს მისალმება სახელისთვის ან default მნიშვნელობისთვის (დაგჭირდებათ in ოპერატორი და ! ოპერატორი)

function myFunction(name = "Guest"){
    if (!name || name==="Guest"){
        const RandomNum = Math.floor(Math.random() * 20);
        name = "Guest" + RandomNum;
    }
    return "hello, " + name
}

console.log(myFunction())