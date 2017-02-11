 
//call the json to load
$.getJSON('https://drive.google.com/file/d/0B_wXlAn8pJKncmFVS05rd043dWc/view?usp=sharing', function(data) {
    //data is the JSON string
console.log("HI!");

});
 var woman=[];

	var graceHopper = {name:"Grace Hopper",
	field:"Computer Science/Math",
	description:"Born in New York City in 1906, Grace Hopper joined the U.S. Navy during World War II and was assigned to program the Mark I computer. She continued to work in computing after the war, leading the team that created the first computer language compiler, which led to the popular COBOL language."};
	var saumyRay = {name:"Saumya Ray",
	field:"Computer Science/Information Science",
	description: "Saumya really loves pita!"
	}
	//woman.push(victoria);
	woman.push(graceHopper);
	woman.push(saumyRay);
	document.write(woman[0].name);