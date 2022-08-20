/*
1)
 Write a JavaScript function that reverse a number.
Example x = 32243;
Expected Output : 34223
*/
/*
function reverseNumber(num) {
    var num = num.toString();
    var revNum = num.split("").reverse().join("");
    return parseInt(revNum);
}
console.log(reverseNumber(32243));
*/
/*
2)
 Write a JavaScript function that checks whether a passed string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam, radar or level.
*/
/*
function isPalindrome(str) {
    var str = str.toLowerCase();
    var revStr = str.split("").reverse().join("");
    if (str === revStr) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome("level"));
*/
/*
3)
Write a JavaScript function that generates all combinations of a string.
Example string : 'dog'
Expected Output : d, do, dog, o, od, og, g, go
*/
/*
function numberCharacters(string) {
    var str = " ";
    for (var i = 0; i < string.length; i++) {
        for (var j = 1; j <= string.length; j++) {
            if (i != j && i < j) {
                var btr = string.substring(i, j);
                str += btr + "\n";
            }
        }
    }
    return str;
}
console.log(numberCharacters("dog"))

*/
/*
4) 
Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
*/
/*
function alphabeticalOrder(str) {
    var str = str.split("");
    var sortedStr = str.sort();
    return sortedStr.join("");
}
console.log(alphabeticalOrder("webmaster"));
*/
/*
5)
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '
*/

// function capitalize(str) {
//     return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
// }
// console.log(capitalize('the quick brown fox'));

/*
6)
 Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development'
*/
/*
function find_longest_word(str) {
    var array1 = str.match(/\w[a-z]{0,}/gi);
    var result = array1[0];

    for (var x = 1; x < array1.length; x++) {
        if (result.length < array1[x].length) {
            result = array1[x];
        }
    }
    return result;
}
console.log(find_longest_word('Web Development Tutorial '));
*/
/*
7)
 Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Example string : 'The quick brown fox'
Expected Output : 5
*/
/*
function countVowels(str) {
    var vowels = 'aeiou';
    var vowel_count = 0;
    for (var i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            vowel_count += 1;
        }
    }
    return vowel_count;
}
console.log(countVowels("The quick brown fox"));
*/
/*
8)
 Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/
/*
function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(7));
*/
/*
9)
Write a JavaScript function which accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
*/
/*
function getType(val) {
    return typeof val;
}
console.log(getType(7));
*/
/*
10)
Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 2,4
*/
/*
function find_second_lowest_and_second_greatest(arr) {
    var sorted = arr.sort(function (a, b) { return a - b });
    var second_lowest = sorted[1];
    var second_greatest = sorted[sorted.length - 2];
    return second_lowest + " " + second_greatest;
}
console.log(find_second_lowest_and_second_greatest([1, 2, 3, 4, 5]));
*/