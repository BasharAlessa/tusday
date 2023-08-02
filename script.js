//              #1              //
//Addition

/*Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5,
but not both 3 and 5. To solve this task you might want to use the modulus operator.*/


for (let i =200 ; i<2700 ; i++){
    if (i%3 ===0 && i%5===0){ 
    continue
    }
    else if (i%3 ===0 ||i%5===0){
        console.log(i)
    }
    else{continue}

}


console.log("           break")

//              #2              //
/*Shift the Values

Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. 
When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].*/
shiftArry = []
let xx= [2,1,6,4,-7]
for (let j =0 ; j <xx.length ; j++){
    shiftArry [j]= xx[xx.length-1 - j]
    
}
console.log(shiftArry)

console.log("           break")


/*3. FizzBuzz

Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word
 "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz". 
 Your output should look like [1,2, 'Fizz',4, 'Buzz', 'Fizz',7, 8, ...]*/

// function fizz(){
//     let result = [];
//     for (let i =0 ; i<135 ; i++){
//         if (i%3 === 0 && i%5=== 0 && i!=0){
//             result.push("fizzbuzz")}
//         else if (i%3===0 && i!=0){
//             result.push ("fizz");
//         }
//         else if (i%5 === 0 && i!=0){
//             result.push("buzz")
//         } else {result.push(i)}
//     }
//     return result

// }
// let output = fizz()
// console.log(output)


for (let i =1 ; i<145 ; i++){
    let result = (i % 3 === 0 && i % 5 === 0 && i !== 0) ? 'FizzBuzz' :
                 (i % 3 === 0) ? 'Fizz' :
                 (i % 5 === 0) ? 'Buzz' : 
                 i;
console.log(result)
}

console.log("           break")


//              #4              //
/*Fibonacci

For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.

A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. 
A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.

0 1 1 2 3 5 8 13 21...*/

function fiboSeq (numb){
    let fibo = [0,1];
    while (fibo[fibo.length -1] + fibo[fibo.length -2] < numb){
        fibo.push(fibo[fibo.length-1] + fibo[fibo.length-2])
    }
    return fibo
}
console.log(fiboSeq(30))



console.log("           break")



//              #5              //
/*Remove the Negative

Given any array X, for example [1,-2,4,1], remove the negative numbers, 

so that the output becomes: [1,4,1].*/


let n= [1,-2, 4, 1]
for (k=0 ; k<n.length ; k++){
        if(n[k]>=0){
            console.log(n[k])
        }
}

console.log("           break")


//              #6              //

/*Communist Censorship

Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *,
so the output would be ['Man', 'I','Love','The','Matrix','*******']. 
Then make your algorithm work for any word of your choice */

let rep = ['Man', 'I','Love','The','Matrix','Program']
let wordToReplace = "Program"
let repstar="*" . repeat(wordToReplace.length)

for (let repi= 0 ; repi<rep.length ; repi++){
    if (rep[repi] === wordToReplace){
        rep[repi]=repstar;

    }
}
console.log(rep)