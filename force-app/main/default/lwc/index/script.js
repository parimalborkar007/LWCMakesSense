

// var arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr);

// console.log('JS File Loaded Successfully');

// arr.push('f');
// console.log(arr);

// var obj = {
//     "name" : "Parimal",
//     "age": 29,
//     "city": "Nagpur",
//     "full Name" : "Parimal Borkar"
// }

// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.city);
// console.log(obj["full Name"]);

// // Spread Operator - Expanding of strings into array of characters
// var greeting = "Hello World!";
// console.log([...greeting]);

// let arr1 = ["Amazon", "Google", "Microsoft"];
// let arr2 = ["Facebook", "Apple", "Netflix"];

// let combinedArr = [...arr1, ...arr2];
// console.log(combinedArr);

// let arr4 = [1, 2, 3];
// let arr5 = [...arr4, 4, 5, 6];
// console.log(arr5);

// let obj1 = {
//     name: "Parimal",
//     age: 29
// };

// let obj2 = {
//     city: "Nagpur",
//     country: "India"
// };

// let combinedObj = {...obj1,...obj2};    
// console.log(combinedObj);



// Promises in JavaScript
// function checkIsSuccess(data){
//     return new Promise(function(resolve,reject){
//         if(data == "Success"){
//             return resolve("Promise Resolved Successfully");
//         }else{
//             reject("Promise Rejected");
//         }
//     });
// }

// checkIsSuccess("Success")
//     .then(function(message){
//         console.log(message);
//     })
//     .catch(function(error){
//         console.log(error);
//     });

// checkIsSuccess("Failure")
//     .then(function(message){
//         console.log(message);
//     })
//     .catch(function(error){
//         console.log(error);
//     });

// let element = document.querySelector('div');
// console.log(element);
// element.style.color = "red";

// let elementAll = document.querySelectorAll('div');
// console.log(elementAll);
// Array.from(elementAll).forEach(function(item){
//     item.style.color = "blue";
// })

// function firstFunction(){
//     console.log("Button Clicked!");
// }

// let btn = document.querySelector('button');
// btn.addEventListener('click', firstFunction);

// document.addEventListener("mousemove", handler);

// function handler(){
//     document.querySelector('.demo').innerHTML = Math.random();
// }

// function removehandler(){
//     document.removeEventListener("mousemove", handler);
// }

// function callCustomMethod(){
//     let event = new CustomEvent("Hello",{
//         detail:{
//             name: "Parimal",
//             age: 29
//         }
//     })
//     document.dispatchEvent(event);
// }

// document.addEventListener("Hello", function(data){
//     console.log("Custom Event Triggered");
//     console.log(data.detail.name);
//     console.log(data.detail.age);
//     console.log("Hello is Called - ", data.detail);
// });

// const sum = (data)=>{
//     let sum = data+10;
//     return sum;
// }

// console.log(sum(5));


// Arrow Functions and 'this' keyword

// let obj = {
//     name1: "Parimal",
//     getName: function(){
//         console.log(this.name1);
//         const fullName = () => {
//             console.log(this.name1)
//             console.log("My full name is " + this.name1 + " Borkar");
//         }
//         fullName();
//     }
// }

// obj.getName();

// setTimeout and setInterval

// window.setTimeout(function(){
//     console.log("This is setTimeout function executed after 3 seconds");
// },3000);

// let count = 0;
// let intervalId = window.setInterval(function(){
//     count++;
//     console.log("setInterval executed " + count + " times");
//     if(count == 5){
//         window.clearInterval(intervalId);
//         console.log("setInterval cleared after 5 executions");
//     }
// },2000);