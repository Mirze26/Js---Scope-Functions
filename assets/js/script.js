
//Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

// function isDivided(n) {

// if(n%21==0){

//     console.log("bolunur")

// }
// else{
//     console.log("bolunmur")
// }

// };

//  isDivided(42);

//---------------------------------------

// let isDivided = (n) =>{


//     if(n%3==0 && n%7==0){

//         console.log("bolunur")

//     }
//     else{
//         console.log("Bolunmur")
//     }
// };

// isDivided(21);

//-------------------------------------------


//Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir. 

// function factorial(num) {
//     if (num === 0 || num === 1)
//       return 1;
//     for (var i = num - 1; i >= 1; i--) {
//       num *= i;
//     }

//     console.log(num);

//   }

//   factorial(5);

//-------------------------------------------

//   let factorial = (num) => {
//     if(num===0 || num===1)
//     return1;
//     for(var i = num - 1; i>=1; i--){
//         num *=i;
//     }
//     console.log(num);
//   }

//   factorial(7)

//----------------------------------------------


//Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

// function evenSquareSum(arr){
//     let result = 1;
//     let sum = 0;

//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] % 2 == 0){
//             result = arr [i] **2;
//             sum += result;
//         }

//     }
//     console.log(sum)
// }

// let arr = [1,2,3,4,5,6,7,8,9,10]
// evenSquareSum(arr)

//------------------------------------------------

// let getEvenSquareSumAF = (arr) => {

//     let result = 1;
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] % 2 == 0) {
//             result = arr[i] ** 2;
//             sum += result;

//         }
//     }

//     console.log(sum)

// }

// let arr = [ 4, 5, 6, 7,8,9,10]
// getEvenSquareSumAF(arr);

//-------------------------------------------------

//Funtiona-a  mail ve password gelir.

// function login (username,password){
//     if(username == "cavid@code.edu.az " && password == "12345"){
//         console.log("Girish olundu");
//     }
//     else{
//         console.log("Mail ve yaxud password sehvdir");
//     }
// }

//   login("cavid@code.edu.az ","12345" )

//-----------------------------------------------------

//  let login = (username, password) => {
//     if (username == "cavid@code.edu.az" && password == "12345") {
//         console.log("Girish olundu");
//     } else {
//         console.log("Mail ve yaxud password sehvdir")
//     }
// }

// login("cavid@code.edu.az",  "12345")

//-------------------------------------------------------------

//function hemin arraydaki tek ededlerin cemini qaytarmalidir

// function oddNumSum(arr) {

//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 1) {
//             sum += arr[i]
//         }

//     }
//     return sum;
// }

// let arr = [1, 3, 5, 6,]

// console.log(oddNumSum(arr));

//------------------------------------------------------------------

// let oddNumSum = (arr) => {

//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 1) {
//             sum += arr[i]
//         }

//     }
//     return sum;
// }

// let arr = [1, 3, 5, 7]

// console.log(oddNumSum(arr));

//---------------------------------------------------------------------

//function hemin arraydaki cut ededlerin sayini qaytarmalidir.


// function evenNumCount(arr) {

//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             count++
//         }

//     }
//       console.log(count)
// }

// let arr = [2,3,4,6,8,10]
// evenNumCount(arr)

//------------------------------------------------------------


let evenNumCount = (arr) => {

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            count++
        }

    }
    console.log(count)
}

let arr = [2, 3, 4, 6, 8, 10]
evenNumCount(arr)
