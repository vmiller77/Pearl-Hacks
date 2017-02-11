 var woman=[];

	var graceHopper = {name:"Grace Hopper",
	field:"Computer Science/Math",
	description:"Born in New York City in 1906, Grace Hopper joined the U.S. Navy during World War II and was assigned to program the Mark I computer. She continued to work in computing after the war, leading the team that created the first computer language compiler, which led to the popular COBOL language."};
	
	var saumyRay = {name:"Saumya Ray",
	field:"Computer Science",
	description: "Saumya really loves nail art!"
	}
	woman.push(graceHopper);
	woman.push(saumyRay);

var d = new Date(); 
var t = d.getTime(); 
var days = Math.floor(t / (1000));

var i = days % woman.length; 

var today = woman[i].name;

	document.write(today);