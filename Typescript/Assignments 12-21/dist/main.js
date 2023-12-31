"use strict";
//problem 1
// // Write Your Code Here
// type n = number;
// // Do Not Edit Here
// let myData: n;
// myData = 1000; // No Problem Here
// myData = +true; // No Problem Here
// console.log(myData);
//problem 2
// // Write Your Code Here
// type mix = (number|boolean)
// // Do Not Edit Here
// let myInfo: mix;
// myInfo = 1000; // No Problem Here
// myInfo = true; // No Problem Here
//problem 3
// Write Your Code Here
// type Info = {
//     theName: string,
//     theAge: number
// }
// type Full = Info &{
//     country: string
// }
// // Do Not Edit Here
// function showInfo(data: Info) {
//     console.log(`The Name Is ${data.theName}`);
//     console.log(`The Age Is ${data.theAge}`);
//   }
//   console.log(showInfo({ theName: "Elzero", theAge: 40 }));
//   function showFullInfo(data: Full) {
//     console.log(`The Name Is ${data.theName}`);
//     console.log(`The Age Is ${data.theAge}`);
//     console.log(`The Country Is ${data.country}`);
//   }
//   console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));
//problem 4
// function yesOrNo(val: number) : "True" | "False" {
//     if(val > 10)
//         return "True";
//     return "False"
//   }
//   // Do Not Edit Here
//   //console.log(yesOrNo("100")); // Error
//   console.log(yesOrNo(30)); // True
//   console.log(yesOrNo(8)); // False
//problem 5
// type  custom= ("Yes" | "No");
// function isHeOld(age: number) : custom {
//     if(age > 40)
//         return "Yes";
//     return "No";
//   }
//   // Do Not Edit Here
//   //console.log(isHeOld("100")); // Error
//   console.log(isHeOld(45)); // "Yes"
//   console.log(isHeOld(30)); // "No"
//problem 6
// let post : readonly [number,string,boolean]
// //post = [100, 200, "Title"]; // Error
// //post = ["Title", 100, true]; // Error
// post = [100, "Title", true]; // Good
// //post.push("Elzero"); // Error => Cant Add
// // Create Destructuring Here
// let [id,title,state] =post
// // Do Not Edit Here
// console.log(id); // 100
// console.log(title); // "Title"
// console.log(state); // true
//problem 7
// Create Enums + Function Here
var Game;
(function (Game) {
    Game[Game["Easy"] = 100] = "Easy";
    Game[Game["Medium"] = 80] = "Medium";
    Game[Game["Hard"] = 30] = "Hard";
    Game[Game["Insane"] = insane(10)] = "Insane";
})(Game || (Game = {}));
function insane(num) {
    return Game.Hard - num;
}
// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20
//# sourceMappingURL=main.js.map