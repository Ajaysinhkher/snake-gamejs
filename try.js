// console.log("hello Developer!");
// let fun = ()=> console.log("hello");
// fun();

// const a=10 ;
// console.log(a);


// let demo = function(){
    
//     var a  =10;
//     console.log(a);

// }
// console.log(a);
// demo();


// {
//     // var a = 10;
//     console.log(a);
// }

// var a = 20;
// console.log(a);


// const fruit = ["apple","banana","kiwi"];
// {
//     const fruit = ["kiwi","orange","pineapple"];
// }

// console.log(fruit[1]);


// let car  = {
//     model:"suv",
//     year:2000,
//     name:"tata",
//     price:1500000,
//     speed:120,
//     runCar: function(){
//         console.log("car is running at max speed:", this.speed);
//     }
// }

// car.runCar();
// console.log(Object.values(car));

// let num  = [12,23,45,9,2,1];

// let ans = num.some(myfun);

// function myfun(value){
//     return value>20
// }

// console.log(ans);

// let nums1  = [1,2,3,4];
// let nums2 = [5,6];

// spread operator : used at function calling time , i.e spread an array into separate values to make it one element 
// let combined = [...nums1,...nums2];
// console.log(combined);


// rest operator: passed as parameter (i.e combine the separate values into a array)
// function demoFun(...nums3){
//     let try1 = [100,200,300];
//     return [...nums3,...try1];
// }

// console.log(demoFun(1,2,3,4,5,6,7,8,9,10));


// function checkPassOrFail(marks) {

//     let ans;
//     if(marks>=40)
//     {
//         console.log("Pass");
//     }else{
//        console.log("Fail");
//     }

// }


// checkPassOrFail(40);

// function evaluateDivision(num1, num2) {
//     return Math.round((num1/num2)*100)/100;
// }

// console.log(evaluateDivision(1,3));

// function ageToDays(age) {
//     return age*365;
// }

// console.log(ageToDays(2));

// function dashingNumbers(num) {
//     const result = num.toString().split('').join('-');
//     console.log(result);
// }

// dashingNumbers(123456);

// function convertToTitleCase(str) {
    
//     let chars = str.split('');
//     // console.log(chars);

//     for(let i=0;i<str.length;i++)
//     {
//         if(i==0 || chars[i-1]==" ")
//         {
//             chars[i] = chars[i].toUpperCase();
//         }
//     }

//     return chars.join('');
// }

// // let str = "hello world";
// console.log(convertToTitleCase("hello world"));
// console.log(convertToTitleCase("india is my country"));


// function addEvenNumbers(n){
//      let sum=0;
//     for(let i=2;i<=n;i++)
//     {
//         if(i%2 == 0)
//         {
//            sum = sum + i;
//         }
       
//     }
    
//     return sum;
// }

// console.log(addEvenNumbers(15));


// function replaceSmiley(input) {
//     let chars1 = input.split(/(:\))/).filter(item=>item.trim());

//     for(let i=0;i<chars1.length;i++)
//     {
//         if(chars1[i]==":)")
//         {
//             chars1[i] = ":(";
//         }
//     }

//     return chars1.join('');
// }

// console.log(replaceSmiley(":) :) :) All smiles here :)"));

// let smileystr = ":) :) :) All smiles here :)";

// let smileychars = smileystr.split(/(:\))/).filter(item=>item.trim());
// console.log(smileychars);



// check for a pronic number :
// function checkPronic(num){

//     let factors= [];
//     let flag=0;
//     for(let i=1;i<num/2;i++)
//     {

//         if(num%i == 0)
//         {
//             factors.push(i);
//         }
//     }

//     for(let j=1;j<=factors.length;j++)
//     {
//         if(factors[j]-factors[j-1] == 1)
//         {
//             flag = 1;   
//         }
//     }

//     if(flag==1){
//         return "Pronic";
//     }

//     return "Not Pronic";
// }


// console.log(checkPronic(13));



// function hideCreditCard(cardNumber){
//     let updatedNumber = cardNumber.toString().split('');
//     for(let i=0;i<11;i++)
//     {
//         updatedNumber[i] = "*"
//     }
    
  
//     return updatedNumber.join('');
// };

// console.log(hideCreditCard(1231234567812345));

// function hideCreditCard(cardNumber) {
//     let str = cardNumber.toString();
//     let last4 = str.slice(-4);
//     let masked = '*'.repeat(str.length - 4);
//     return masked + last4;
// }

// console.log(hideCreditCard(1231234567812345));


// function areEqual(obj1,obj2){

//     if(!Array.isArray(obj1) && !Array.isArray(obj2)){
//         if(obj1 === obj2)
//         {
//             return true;
//         }
//         else{
//             return false;
//         }
//     }else if(Array.isArray(obj1) && Array.isArray(obj2))
//     {
//         for(let i=0;i<obj1.length;i++){
//             if(obj1[i]!== obj2[i])
//             {
//                 return false
//             }
//         }
//         return true;
//     }
 
// }

// console.log(areEqual([1,2,3],[1,2,3]));
// console.log(areEqual("hello","Hello"));
// console.log(areEqual(1,1));
// console.log(areEqual([1,3,2],[1,2,3]));


// function starPattern(n) {
//     for (let i = 0; i < n; i++) {
//         let row = '';
//         for (let j = 0; j <= i; j++) {
//             row += '*';
//         }
//         console.log(row);
//     }
// }

// starPattern(5);


// function starPyramid(n) {
//     for (let i = 0; i < n; i++) {
//         let spaces = ' '.repeat(n - i - 1);
//         let stars = '*'.repeat(2 * i + 1);
//         console.log(spaces + stars);
//     }
// }

// starPyramid(5);


// function runCar(){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve("car started successfully !");
//         },10000);
//     });
// }

// async function startCar(){
//     console.log("starting a car")


//     let message = await runCar();  //await will make the whole execution to wait for  the promise returned
//     console.log(message);
//     let message2 = await repairCar();
//     console.log(message2);
//     console.log("car running successfully");

// }

// function repairCar(){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve("car repaired !");
//         },10000);
//     });
// }

// startCar();




function getNumbers(...arr1){
    // console.log(arr1);
    let sum = 0;
    // arr1.forEach(element => {
    //    sum += element;
    // });

    for(let num of arr1){
        sum +=num;
    }
    
    return Math.floor(sum);
}


let arr2 = [1,2];
let arr3 = [3,4,5];

console.log(...arr2,...arr3)
console.log(...arr3);
console.log(arr3);
console.log(getNumbers(...arr3,...arr2,20,10.5,10.2));