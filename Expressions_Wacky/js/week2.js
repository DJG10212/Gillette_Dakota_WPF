/*
Dakota Gillette
WPF Section 01
Assignment: Expressions Wacky
10-8-2014
*/


//calculate the average number of times the neighbors dog barks per day

alert ("How many times a day does your neighbors dog bark?")

//ask user how many times per day the dog barks?
var mon = parseInt(prompt("How many times did the dog bark on Monday?"))

var tue = parseInt(prompt("How many times did the dog bark on Tuesday?"))

var wed = parseInt(prompt("How many times did the dog bark on Wednesday?"))

var thur = parseInt(prompt("How many times did the dog bark on Thursday?"))

var fri = parseInt(prompt("How many times did the dog bark on Friday?"))

var sat = parseInt(prompt("How many times did the dog bark on Saturday?"))

var sun = parseInt(prompt("How many times did the dog bark on Sunday?"))


//add up total
var totalBarks = mon+tue+wed+thur+fri+sat+sun;

//calculate the average number of barks

var averageBarks = totalBarks / 7


//alert user of the average number and total barks
alert ("The dog(s) barked " +totalBarks+ " times this week! The average number of barks per-day was " +averageBarks+ " times!")







