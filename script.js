/*3. FizzBuzz

Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word
 "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz". 
 Your output should look like [1,2, 'Fizz',4, 'Buzz', 'Fizz',7, 8, ...]*/

function fizz(){
    let result = [];
    for (let i =0 ; i<135 ; i++){
        if (i%3 === 0 & i%5=== 0){
            result.push("fizzbuzz")}
        else if (i%3===0){
            result.push ("fizz");
        }
        else if (i%5 === 0){
            result.push("buzz")
        } else {result.push(i)}
    }
    return result

}
let output = fizz()
console.log(output)
