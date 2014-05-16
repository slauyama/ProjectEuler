// Question 1
// var sum = 0, arr = [];
// for (var i = 0; i < 1000; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         sum += i;
//         arr.push(i);
//     }
// }
// console.log(sum, arr);
// console.log("\n");

// Question 2
// arr = [1, 2];
// while (arr[arr.length - 1] + arr[arr.length - 2] < 4000000) {
//     arr.push(arr[arr.length - 1] + arr[arr.length - 2] )
// }
// arr = arr.filter(function(index) {return index % 2 == 0})
// arr.forEach(function(index) {sum += index})
// console.log(sum, arr);
// console.log("\n");

// Question 3 NOT SOLVED
// function checkPrime(value) {
//     for (var counter = 2; counter < value; counter++) {
//         if (value % counter === 0)
//             return false;
//     }
//     return true;
// }

// var arr = [];                 //600851475143
//                               //300425737572 
// for (var counter = 300425737572; counter; counter--) {      
//     if (600851475143 % counter === 0 && checkPrime(counter)) {
//         arr.push(counter);
//         break;
//     }
// }

// console.log(arr);
// console.log("\n");

//Question 4
// console.log("Question 4")
// var product = 0, str = "", largest = 0;

// for (var i = 999; i > 99; i--) {
//     for (var j = 999; j > 99; j--) {
//         product = i * j;
//         str = product.toString();
        
//         mid1 = Math.floor((str.length - 1) / 2) + 1;
//         mid2 = Math.ceil((str.length - 1) / 2);

//         part1 = str.slice(0, mid1);
//         part2 = str.slice(mid2, str.length).split("").reverse().join("");
//         if (part1 == part2) {            
//             largest = largest < product ? product : largest;
//             break;
//         }       
//     }
// }

//Question 5
// console.log("Question 5")
// var done  = false, start = 2502;

// function cleanDivide(value, amount) {
//     for (var counter = 1; counter < amount; counter++) {
//         if (value % counter !== 0)
//             return false;
//     }
//     return true;
// }

// while (!done) {
//     if (cleanDivide(start, 20)) {
//         console.log (start)
//         done = true;
//     }
//     start++;
// }

// Question 6
// console.log("Question 6")
// var sumOfSquares = 0, sqauresOfSum = 0

// for (var counter = 1; counter < 101; counter++) {
//     sumOfSquares += Math.pow(counter,2);
//     sqauresOfSum += counter;
// }

// sqauresOfSum = Math.pow(sqauresOfSum, 2);
// console.log(sumOfSquares, sqauresOfSum);
// console.log(sqauresOfSum - sumOfSquares);

//Question 7
// console.log("Question 7");
// function isPrime(value) {
//     for (var counter = 2; counter < value; counter++) {
//         if (value % counter === 0)
//             return false;
//     }
//     return true;
// }
// var arr = [];
// console.log(isPrime(4));
// for (var start = 1, itr = 0; itr <= 10001; start++) {
//     if (isPrime(start)) {
//         arr.push(start)
//         itr++;
//     }
// }
// console.log(arr[10001]);

//Question 8
var str ="7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450"
for (var start = 0, largest = 0; start + 5 < 1000; start++) {
    var next = str.slice(start, start+5);
    next = next.split("");
    test = 1;
    next.forEach(function(index) {test *= index})
    console.log(test);
    // largest = largest < next ? parseInt(str.slice(start, start+5)) : largest;
    // console.log(largest);
}
