$(document).ready(function(){
// Function 1

$('#click-me1').click(function(){
	var person = {
	firstName: "Bob", 
	lastName: "Smith", 
	age: 32
	};		
	for (var i in person){
	$('#out-put1').append(i + ":" + " "+ person[i] + "<br>")
	console.log(i, person[i]);
	// $('#out-put2').html(person.lastName);
	// $('#out-put3').html(person.age);
	};
})

//Function 2

$("#click-me2").click(function(){
	var person = {
		firstName: "Bob", 
		lastName: "Smith", 
		age: 32, 
		rollno: 12
	};
	for (var i in person){
	$('#out-put2a').append(i + ":" + " "+ person[i] + "<br>")
	console.log(i, person[i]);
	};
	delete person.rollno;
	for (var i in person){
	$('#out-put2b').append(i + ":" + " "+ person[i] + "<br>")
	console.log(i, person[i]);
	};
})



})
