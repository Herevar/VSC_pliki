// function countSheeps(arrayOfSheep) {
//     let y = 0
//     for(const x of arrayOfSheep){
//       if (!(x === null || x === undefined)){
//         if( x === true){
//           y +=1
//         }
//       }
//     }
//     return y
//   }
//   const arrayOfSheep = [true,  true,  true,  false,
//                 true,  true,  true,  true ,
//                 true,  false, true,  false,
//                 true,  false, false, true ,
//                 true,  true,  true,  true ,
//                 false, false, true,  true ]
// //   console.log(countSheeps(arrayOfSheep))


//   function bmi(weight, height) {
//     const bmi = weight/(height * height);
//     if (bmi < 18.5){
//       console.log(bmi)
//       return  "Underweight";
//     }
//     else if (bmi <= 25.0){
//       return  "Normal";
//     }
//     else if (bmi <= 30.0){
//       return "Overweight";
//     }
//     else {
//       return "Obese";
//     }
//   }
//   const weight = 90
//   const height = 1.80
//   console.log(weight/(height * height))
//   console.log(bmi(weight, height))

const a = 123
const b = 2

const check = function (z,m) {
  console.log(a+b)
}
check()