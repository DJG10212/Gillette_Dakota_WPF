/*
Dakota Gillette
WPF Section 01
Assignment: Expressions Personal
10-8-2014
*/

//calculate your current grade in the class

alert ("this will calculate your average grade percentage based off of 5 assignments all weighted equally")

//ask user each grade percentage for 5 assignments
var test1 = parseInt(prompt("What was your grade percentage on the first assignment?"))

var test2 = parseInt(prompt("What was your grade percentage on the second assignment?"))

var test3 = parseInt(prompt("What was your grade percentage on the third assignment?"))

var test4 = parseInt(prompt("What was your grade percentage on the fourth assignment?"))

var test5 = parseInt(prompt("What was your grade percentage on the fifth assignment?"))


//add up total
var testTotal = test1+test2+test3+test4+test5;

//calculate the average score

var averageScore = testTotal / 5


//alert user of their average score
alert ("Your average score on the five assignments was " +averageScore+ "%")










