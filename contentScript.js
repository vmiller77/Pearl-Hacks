 
//call the json to load
// $.getJSON('https://drive.google.com/file/d/0B_wXlAn8pJKncmFVS05rd043dWc/view?usp=sharing', function(data) {
//     //data is the JSON string
// console.log("HI!");

// });

var woman=[];

	var graceHopper = {name:"Grace Hopper",
	field:"Computer Science/Math",
	img:url("https://upload.wikimedia.org/wikipedia/commons/a/ad/Commodore_Grace_M._Hopper,_USN_(covered).jpg")
	description:"Born in New York City in 1906, Grace Hopper joined the U.S. Navy during World War II and was assigned to program the Mark I computer. She continued to work in computing after the war, leading the team that created the first computer language compiler, which led to the popular COBOL language."};
	
	var saumyaRay = {name:"Saumya Ray",
	field:"Computer Science",
	 img:url("https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/12509093_821351854657291_4769766298998474702_n.jpg?oh=6e0c840f93fda1cc634b7ebfe4221108&oe=593D802A"),
	description: "Saumya really loves nail art!"
	}

	var maggieHamilton = {name:"Margaret Hamilton",
	field:"Computer Science/Math",
	img:url("https://upload.wikimedia.org/wikipedia/commons/6/68/Margaret_Hamilton_1995.jpg"),
	description: "Margaret Heafield Hamilton is an American computer scientist, systems engineer, and business owner. She was Director of the Software Engineering Division[3] of the MIT Instrumentation Laboratory, which developed on-board flight software for the Apollo space program."};


	var victoriaMiller = {name:"Victoria Miller",
	field: "Computer Science/Mathematical Decision Sciences",
	img: url("https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/13697050_10207337430054771_3154755651596441054_n.jpg?oh=1d0b1032b6c69c4de0f96144e275ab70&oe=5901AACF")
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
var todayImg = woman[i].img;
var todayDescr = woman[i].description;


//document.write(today);

var nameBox = document.createElement("DIV");
var nameBoxHeader=document.createElement("H");
nameBoxHeader.style.display="block"; 
nameBoxHeader.style.fontSize="1.5em";
nameBoxHeader.style.margin="0.83em";
nameBoxHeader.style.fontWeight="bold";
var nameText=document.createTextNode(today);
nameBoxHeader.appendChild(nameText);
nameBox.appendChild(nameBoxHeader);
var box = document.getElementsByClassName("box");
box[0].appendChild(nameBox);

var imgBox = document.createElement("DIV");
var imgBoxHeader=document.createElement("H");
imgBoxHeader.style.display="block"; 
imgBoxHeader.style.fontSize="1.5em";
imgBoxHeader.style.margin="0.83em";
imgBoxHeader.style.fontWeight="bold";
var imgText=document.createTextNode(todayImg);
imgBoxHeader.appendChild(imgText);
imgBox.appendChild(imgBoxHeader);
box[1].appendChild(nameBox);

var desBox = document.createElement("DIV");
var desBoxHeader=document.createElement("H");
desBoxHeader.style.display="block"; 
desBoxHeader.style.fontSize="1.5em";
desBoxHeader.style.margin="0.83em";
desBoxHeader.style.fontWeight="bold";
var desText=document.createTextNode(todayDescr);
desBoxHeader.appendChild(desText);
desBox.appendChild(desBoxHeader);
box[2].appendChild(desBox);
