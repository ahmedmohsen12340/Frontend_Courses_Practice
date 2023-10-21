//problem 2

// function calculate(numOne: number, numTwo: number) {
//     return numOne + numTwo;
//   }
  
//   console.log(calculate(10, 20)); // 30
//   //console.log(calculate("10", "20")); // We Don't Need This To Work
//   console.log(calculate(+true, +true)); // 2

//problem 3

// function printInfo(valueOne:(string | number), valueTwo:(string | number)) {
//     return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
//   }
  
//   console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
//   console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
//   //console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work

//problem 4

// let arr: any = [2, "Ali", false , ["yousf",false]];    //(number | boolean[] | (string | (string | number)[])[])[];

//problem 5

// function reportErrors(username, age: number) {
//     let rank = "Professor";
//     return `Username: ${username}`;
//     console.log("We Will Not Reach Here");
//   }
  
//   console.log(reportErrors("Elzero", 40));

//problem 6

// let nothing;
// let theName: string = "Elzero";
// function showMyDetails(a = "", b = "", c) {
//   return `${a}${b}${c}`;
// }

// // Replace ???? With The Available Variables As Argument To Get The Result
// console.log(showMyDetails(undefined,undefined,"Elzero")); // Elzero

//problem 7

// function showMsg(user?: string, age?: number|string , country?: string) {
//     return `${user}${age}${country}`;
//   }
  
//   console.log(showMsg());
//   console.log(showMsg("Elzero"));
//   console.log(showMsg("Elzero", 40));
//   console.log(showMsg("Elzero", "40", "Egypt"));

//problem 8

// // Write The Function Here

// let printInConsole= function(...arr:any):any{
//     for(let member in arr){
//         console.log(`The value Is ${arr[member]} And Type is ${typeof(arr[member])}`)  ;
//     }
//     return "Done";
// }

// // Using The Function => Do Not Edit
// console.log(printInConsole(1, 2, 3, 4, 5));
// console.log(printInConsole("A", "B", "C"));
// console.log(printInConsole(true, false, false, true, true));

// // Output
// // The Value Is 1 And Type Is number
// // The Value Is 2 And Type Is number
// // The Value Is 3 And Type Is number
// // The Value Is 4 And Type Is number
// // The Value Is 5 And Type Is number
// // Done
// // The Value Is A And Type Is string
// // The Value Is B And Type Is string
// // The Value Is C And Type Is string
// // Done
// // The Value Is true And Type Is boolean
// // The Value Is false And Type Is boolean
// // The Value Is false And Type Is boolean
// // The Value Is true And Type Is boolean
// // The Value Is true And Type Is boolean
// // Done