 var woman=[];

	var graceHopper = {name:"Grace Hopper",
	field:"Computer Science/Math",
	description:"Born in New York City in 1906, Grace Hopper joined the U.S. Navy during World War II and was assigned to program the Mark I computer. She continued to work in computing after the war, leading the team that created the first computer language compiler, which led to the popular COBOL language."};
	
	var saumyaRay = {name:"Saumya Ray",
	field:"Computer Science",
	description: "Saumya really loves nail art!"
	}

	var maggieHamilton = {name:"Margaret Hamilton",
	field:"Computer Science/Math",
	description: "Margaret Heafield Hamilton is an American computer scientist, systems engineer, and business owner. She was Director of the Software Engineering Division[3] of the MIT Instrumentation Laboratory, which developed on-board flight software for the Apollo space program."};
	

	var victoriaMiller = {name:"Victoria Miller",
	field: "Computer Science/Mathematical Decision Sciences",
	description: "She's in a business frat but doesn't major in it."}

	woman.push(graceHopper);
	woman.push(saumyaRay);
	woman.push(victoriaMiller)
	woman.push(maggieHamilton)

var d = new Date(); 
var t = d.getTime(); 
var days = Math.floor(t / (50000));

var i = days % woman.length; 

var today = woman[i].name;

document.write(today);