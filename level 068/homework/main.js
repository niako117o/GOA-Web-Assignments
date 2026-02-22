// 1) მომხმარებელს შემოატანინეთ რიცხვი და შეამოწმეთ არის თუ არა რიცხვი ლუწი ან კენტი ternary operator ით, თუ რიცხვი კენტია, გამოიტანეთ მესიჯი "Number is odd", თუ რიცხვი ლუწია გამოიტანეთ "Number is even"
let number = prompt("enter your number: ")
parseInt(number) % 2 == 0 ? console.log("Even") : console.log("Odd")


// 2) მომხმარებელს შემოატანინეთ ასაკი და ცვლადი is_student გაუტოლეთ booleanს, თუ მომხმარებელი არის 18 წელსა და 24 წელს შორის და არის სტუდენტი, მაშინ დაპრინტეთ მესიჯი: "შენ ხარ სტუდენტი და გეკუთვნის სტიპენდია, თუ მომხმარებელი არის 18 წლის და არ არის სტუდენტი, გამოიტანეთ მესიჯი: "18 წლის ხარ მარა სტუდენტი არა, რა სტიპენდიაზე ლაპარაკობ", სხვა შემთხვევაში: "ჯერ სკოლა დაამთავრე", გამოიყენეთ if-else-elseif

let age = parseInt(prompt("enter your age: "))
let is_student = true

if (age >= 18 || age <= 24){
    console.log("შენ ხარ სტუდენტი და გეკუთვნის სტიპენდია")
}else if (age == 18){
    console.log("18 წლის ხარ მარა სტუდენტი არა, რა სტიპენდიაზე ლაპარაკობ")
}else {
    console.log("ჯერ სკოლა დაამთავრე")
}
// 3) მომხმარებელს prompt ად შემოატანინეთ 5 მანქანის მოდელი ან სახელი და შეამოწმეთ თითოეული და გამოიტანეთ მესიჯი თითოეულზე switch/case გამოყენებით
let car = prompt("enter your car brend: ")

switch (car){
    case "BMW":
        console.log("BMW")
        break
    
    case "mercedes":
        console.log("mercedes")
        break

    case "Porsche":
        console.log("porsche")
        break
    
    case "limuzini":
        console.log("limuzini")
        break

    case "jiguli":
        console.log("jiguli")
        break
}