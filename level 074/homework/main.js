// 1) ახსენით განსხვავება global scope/function scope/ block scope ს შორის

// global scope - არის როცა შეგიძლია კოდს მისწვდე ნებისმიერი ხაზიდან
//function scope - არის როცა შეგიძლია კოდს მისწვდე მარტო ფუნქციაში
//block scope - არის როცა შეგიძლია კოდს მისწვლე ზვეულ გრჩხილებში, ანუ if - ში, 

// 2) იპოვე და გაასწორე scope-თან დაკავშირებული შეცდომები:


// function greet() {
//   if (true) {
//     let message = "Hello!";
//   }
//   console.log(message);
// }
// greet();

//სწორი ვერსია:

function greet() {
    if (true) {
    let message = "Hello!";
    console.log(message);
   }
 }
 greet();



// 3) გააკეთეთ 2-2 მაგალითი დღევანდელ ნასწავლ scope ბზე


// global scope


const name = "niako"
console.log(name)



//function scope
function number(){
    const num = 5
    console.log(num)
}

number()


//block scope
function block(){
    if (2 > 1){
        const block1 = "nia"
        console.log(block1)
    }
}

block()

