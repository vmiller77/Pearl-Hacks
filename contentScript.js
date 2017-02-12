//call the json to load
// $.getJSON("http://pastebin.com/raw/j13uM49D", function(data) {
//     //data is the JSON string
// console.log("HI!");

// });

var woman=[];

	var graceHopper = {name:"Grace Hopper",
	field:"Computer Science/Math",
	img:"https://upload.wikimedia.org/wikipedia/commons/a/ad/Commodore_Grace_M._Hopper,_USN_(covered).jpg",
	description:"Born in New York City in 1906, Grace Hopper joined the U.S. Navy during World War II and was assigned to program the Mark I computer. She continued to work in computing after the war, leading the team that created the first computer language compiler, which led to the popular COBOL language."};
	
	var saumyaRay = {name:"Saumya Ray",
	field:"Computer Science",
	img:"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/12509093_821351854657291_4769766298998474702_n.jpg?oh=6e0c840f93fda1cc634b7ebfe4221108&oe=593D802A",
	description: "Saumya really loves nail art!"
	}

	var maggieHamilton = {name:"Margaret Hamilton",
	field:"Computer Science/Math",
	img:"https://upload.wikimedia.org/wikipedia/commons/6/68/Margaret_Hamilton_1995.jpg",
	description: "Margaret Heafield Hamilton is an American computer scientist, systems engineer, and business owner. She was Director of the Software Engineering Division[3] of the MIT Instrumentation Laboratory, which developed on-board flight software for the Apollo space program."};

	var victoriaMiller = {name:"Victoria Miller",
	field: "Computer Science/Mathematical Decision Sciences",
	img:"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/13697050_10207337430054771_3154755651596441054_n.jpg?oh=1d0b1032b6c69c4de0f96144e275ab70&oe=5901AACF",
	description: "She's in a business frat but doesn't major in it."}

	var srihitaBongu = {name:"Srihita Bongu",
	field:"Chemistry/Economics",
	img:"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/11403148_1079322125428668_4129165249938649479_n.jpg?oh=32e2160ebd9032530ba15a5ea9014a53&oe=594BB1D5",
	description: "She really wishes she majored in Comp Sci."};

	var dorothyHodgkin = {name:"Dorothy Hodgkin",
	field: "Chemistry",
	img:"https://upload.wikimedia.org/wikipedia/en/3/3f/Dorothy_Hodgkin_Nobel.jpg",
	description: "Regarded as a pioneer in the study of X-ray crystallography, Hodgkin was a British biochemist who discovered the structures of penicillin and insulin. In 1964, she was the third woman to win the Nobel Prize in Chemistry."};

	var meganSmith = {name:"Megan Smith",
	field: "Technology/Politics",
	img:"https://www.smith.edu/news/gatenew/wp-content/uploads/2016/02/ms-crop.jpg",
	description: "In 2014, Smith was named the first female, and third overall, Chhief Technology Officer of the United States. Prior to her role in government, she was the CEO of Planet Out and a top executive at Google, starting the latter's Women Techmakers diversity initiative."};

	var maryamMirzakhani = {name:"Maryam Mirzakhani",
	field: "Mathematics",
	img:"http://mathematics.stanford.edu/wp-content/uploads/connections-images/maryam-mirzakhani/Mirzakhani_original.jpg",
	description: "Mirzakhani, currently a professor at Stanford University, was both the first woman and the first Iranian in 2014 to be awarded the Fields medal, the equivalent of the Nobel Prize in Mathematics, for her oustanding contributions to the study of Riemann surfaces."};

	var francesAllen = {name:"Frances Allen",
	field:"Computer Science",
	img:"http://www.berkeley.edu/news/berkeleyan/2008/01/images/franallen1.jpg",
	description: "Allen is a pioneer in the field whose seminal work in optimizing compilers allowed her to become the first female IBM feelow and first woman to win the A.M. Turing Award in 2006."};

	var bellBurnell = {name:"Jocelyn Bell Burnell",
	field:"Astrophysics",
	img:"http://www.astronomycast.com/wp-content/uploads/2014/12/INTOct08p5-jocelyn1.jpg",
	description: "Bell Burnell was the first to discover and precisely analyze radio pulsars as a postgraduate student, for which her thesis supervisor shared the 1974 Nobel Prize, while she was excluded. She went on to become the president of the Royal Astronomical Society as well as the Institute of Physics, and currently serves as Pro-Chancellor for the University of Dublin."};

	var deborahDiaz = {name:"Deborah Diaz",
	field:"Information Technology",
	img:"https://www.nasa.gov/sites/default/files/images/diaz.jpg",
	description: "Diaz is currently NASA's Chief Technology Officer for IT who has created and led many high profile initiatives that include Women in Data. Prior to NASA, she was the CIO for the Department of Homeland Security and the deputy CIO of the US Trademark and Patent Office, where she developed and implemented ground-breaking scientific programs and modernized business processes."};
	woman.push(graceHopper);
	woman.push(saumyaRay);
	woman.push(victoriaMiller);
	woman.push(srihitaBongu);
	woman.push(maggieHamilton);
	woman.push(dorothyHodgkin);
	woman.push(meganSmith);
	woman.push(maryamMirzakhani);
	woman.push(francesAllen);
	woman.push(bellBurnell);
	woman.push(deborahDiaz);

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
nameBoxHeader.style.textAlign="center";
var nameText=document.createTextNode(today);
nameBoxHeader.appendChild(nameText);
nameBox.appendChild(nameBoxHeader);
var box = document.getElementsByClassName("box");
box[0].appendChild(nameBox);

var imgBoxHeader=document.createElement("H");
var img = document.createElement("IMG");
imgBoxHeader.appendChild(img);
img.src=woman[i].img;
img.style.height="200px";
box[1].appendChild(imgBoxHeader);
imgBoxHeader.style.paddingLeft="100px"
<<<<<<< HEAD
=======

// var imgBox = document.createElement("DIV");
// var imgBoxHeader=document.createElement("H");
// imgBoxHeader.style.display="block"; 
// imgBoxHeader.style.fontSize="1.5em";
// imgBoxHeader.style.margin="0.83em";
// imgBoxHeader.style.fontWeight="bold";
// var imgText=document.createTextNode(todayImg);
// imgBoxHeader.appendChild(imgText);
// imgBox.appendChild(imgBoxHeader);
// box[1].appendChild(nameBox);

>>>>>>> origin/master

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