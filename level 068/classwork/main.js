// 1) მომხმარებელს prompt გამოყენებით შემოატანინეთ ასაკი და ternary operator გამოყენებით შეამოწმეთ რომ თუ მისი ასაკი 18 წელზე მეტია ან ტოლია, მაშინ გამოიტანოს მესიჯი "სრულწლოვანი ხარ" სხვა შემთხვევაში "არ ხარ სრულწლოვანი"

let age = prompt("enter your age: ");
age >= 18 ? console.log("სრულწლოვანი ხარ") : console.log("არ ხარ სრულწლოვანი")


// 2) prompt გამოყენებით მომხმარებელს შემოატანინე რიცხვები 1 დან 5 ის ჩათვლით, და switch ის და case გამოყენებით შეამოწმეთ თითოეული რიცხვი და გამოიტანეთ მესიჯი : რიცხვი არის {რიცხვი}

let numbers = prompt("enter your numbers bitween 1-5: ")
switch (numbers){
    case 1:
        console.log("რიცხვი არის 1")
        break
    
    case 2:
        console.log("რიცხვი არის 2")
        break

    case 3:
        console.log("რიცხვი არის 3")
        break
    
    case 4:
        console.log("რიცხვი არის 4")
        break

    case 5:
        console.log("რიცხვი არის 5")
        break
}


// 3) მომხმარებელს კითხე ასაკი, გამოიყენეთ if else else if რომ შეამოწმოთ რომ თუ მომხმარებელი არის 18სა და 60 წელს შორის, მაშინ გამოიტანეთ მესიჯი "მუშაობა შეგიძლია", თუ ასაკი 60ზე მეტია მაშინ გამოიტანეთ მესიჯი, "გადი პენსიაზე რა თავს იკლავ", ხოლო სხვა შემთხვევააში "არაა სამუშაო ასაკი"

let Age = prompt("enter your age please: ")
if (age >= 18 || age <= 60){
    console.log("მუშაობა შეგიძლია")
}else if (age > 60){
    console.log("გადი პენსიაზე რა თავს იკლავ")
}else {
    console.log("არაა სამუშაო ასაკი")
}


// 4) მომხმარებელს ჰკითხე ფერი (red, blue, green), switch-ით გამოიტანე ქართული სახელები

let colors = prompt("enter your color: ")
switch (colors){
    case "red":
        console.log("წითელი")
        break

    case "blue":
        console.log("ლურჯი")
        break

    case "green":
        console.log("მწვანე")
         break
}