// 1 - Complete the function cube that returns the cube of x:

function cube (x){
	return cube=x*x*x
}
 	



// 2 - Write a function sameLength that accepts two strings as arguments, and returns true if those strings have the same length, and false otherwise.

function sameLength(string1, string2) {
if  (string1.sameLength=== string2.sameLength){
return true;
}
return false;}
// 3 - Write a function called scoreToGrade that accepts a number as a parameter and returns a string representing a letter grade corresponding to that score.

function scoreToGrade(x) {
 if (x>50);{
 	return 'pass'
 } else { (x<50);
return 'fail'
}}

// USE RECURSION
// Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string str should be repeated
// repeatString('dog', 0); // => ''
// repeatString('dog', 1); // => 'dog'
// repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog'
// repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'

function repeatString(str, count) {
var string='';
 if (count===0){
 	return ''}
 	return string= str+repeatString(str,count-1)}
 
