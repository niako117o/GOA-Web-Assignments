// 5) შექმენი ფუნქცია flipCoin().
//     მოთხოვნები:
//     გამოიყენე Math.random()
//     ფუნქციამ უნდა დააბრუნოს "Heads" ან "Tails"
//     დაბეჭდე შედეგი console.log-ით

function flipCoin() {
    const coin = Math.floor(Math.random * 10);
    if(coin % 2 == 0){
        console.log("Heads");
    }else{
        console.log("Tails");
    }
}

console.log(flipCoin());

// 6) შექმენი პროგრამა, რომელიც გამოითვლის ადამიანის ასაკს.
//    მოთხოვნები:  
//     შექმენი მთავარი ფუნქცია getAge(birthYear)
//     გამოიყენე helper function getCurrentYear()
//     getCurrentYear() უნდა დააბრუნოს მიმდინარე წელი (მაგალითად 2026)
//     მთავარი ფუნქცია უნდა გამოითვალოს ასაკი და დააბრუნოს ტექსტი:


function getAge(birthYear){
    
}