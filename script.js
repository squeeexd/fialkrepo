// // const cats = 23+23;
// // console.log(cats);
// // cats = 47;
// // console.log(cats);
// // cats += 10;
// // // console.log(cats);
// // function fun1(a, b, c, d) {
// //     console.log('Привет')
// //     console.log(a+b+c+d);
// // }
// // let cats = 5
// // fun1(5, 6, 7, 8)

// // let a = 7
// // let b = 6
// // let c = 9

// // function plus(number1, number2) { //функция с плюсиком между чиселками
// //     console.log(number1+number2); 
// // }
// // plus(a, b)                        //вызываем эту функцию

// // function vozvrashenie(number1, number2) { //функция с минусиком между чиселками
// //     return number1-number2                //вывод с помощью слова return
// // }
// // console.log(vozvrashenie(a, b))           //вызов этой функции учитывая ее return

// // function plus1(number1, number2, number3) { //функция с двумя плюсиками между 3 чиселками
// //     console.log(number1+number2+number3); 
// // }
// // plus1(a, b, c)                              

// // function vozvrashenie1(number2, number3) {  //функция с минусиком между чиселками
// //     return number3-number2                  //вывод с помощью слова return
// // }
// // console.log(vozvrashenie1(b, c))            //вызов этой функции учитывая ее return


// function sayHi1 (){
//     alert("Привееет")
// }

// function sayHi2 (){
//     alert("Максим крутой перец")
// }

// function sayHi3 (){
//     alert("Никита тоже крутой перец")
// }

// const sq1 = document.getElementById("sq1") 
// sq1.addEventListener("click", sayHi1)

// const sq2 = document.getElementById("sq2") 
// sq2.addEventListener("click", sayHi2)

// const sq3 = document.getElementById("sq3") 
// sq3.addEventListener("click", sayHi3)

// const inp = document.getElementById('inp')
// console.log(inp.value);
// inp.value=''
// const inp = document.getElementById('inp')
// const inp2 = document.getElementById('inp2')
// const btn = document.getElementById('btn')
// const result = document.getElementById('result')

// console.log('123');


// check = btn.addEventListener('click', logVal)


// function logVal() {
//     if (!isNaN(inp.value) && (!isNaN(inp2.value))) {
//         result.classList.remove('error')
//         result.textContent = Number(inp.value)*Number(inp2.value)
//     } 
//     else {
//         result.classList.add('error')
//         result.textContent = 'Вы ввели не число!!'
//     }
    
//     inp.value=('')
//     inp2.value=('')
// }

// let cond = 5
// switch (cond) {
//     case 1: 
//     console.log(1);
//     break;
//     case 2: 
//     console.log(2);
//     break;

//     default:
//         console.log('Ни 1 ни 2')
//         break;
// }


//19.09.2025

// let a = 10
// while (a>0) {
//         if (a==5) {
//         a--
//         continue
//     }
//     console.log(a);
//     a--
// }

// for (let index = 20; index >= 10; index-=2) {
//     if (index%3==0) {
//         continue
//     }
//     console.log(index)
    
// }

// let a = ["Математика", "Кошка", "Магазин","Никита", "Стул",]

// a.forEach((element, index) => {
//     if (element [0]==='М'){
//     console.log(`${index} : ${element}`);
//     }
// });


// let b = 0
// while (true) {
//     let a = Math.floor((Math.random()*100)+1)
//     console.log(a)
//     b+=a
//     if (a==1)
//         break
// }
// console.log(b);



// console.log(Math.floor(Math.random()*10))

// console.log('Privet');


// setTimeout(() => {
//    console.log('Poka');
    
// }, 3000);


// const circle = document.getElementById('const')

let interval = setInterval(() => {
    circle.classList.add('moveRight')
    setTimeout(() => {
        circle.classList.add('moveDown')
        setTimeout(() => {
            circle.classList.remove('moveRight')
            setTimeout(() => {
               circle.classList.remove('moveDown')
            }, 1000);
        }, 1000);
    }, 1000);
}, 4000);



// let interval = setInterval(() => {
//     console.log('privet');
// }, 1000);

// setTimeout(() => {
// clearInterval(interval)    
// }, 5000);
