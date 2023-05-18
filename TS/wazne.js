//npm i -g typescript  //trzeba paczke
// tsc --version

// npm i -D ts-node  //narzedzie deweloperskie zeby odpalic w ts

// ale mozliwe ze trzeba npm i -g ts-node  (jezeli ts-node normalnie nie zadziała to globalnie trzeba odpalanie tego)
//ts-node index.ts

// trzeba dodac w task.json
// {
//     "version": "2.0.0",
//     "tasks": [
//         {
//             "label": "typescript",
//             "type": "typescript",
//             "tsconfig": "tsconfig.json",
//             "option": "watch",
//             "auto": true,
//             "problemMatcher": [
//                 "$tsc-watch"
//             ]
//         }
//     ]
// }